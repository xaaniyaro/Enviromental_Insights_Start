import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import DisplayStat from './DisplayStat';
import DisplayTemp from './DisplayTemp';
import { makeStyles } from '@material-ui/core/styles';

/*
const dummy= [
    {hour: '10:00', temperature: 20},
    {hour: '10:00', temperature: 20},
    {hour: '10:00', temperature: 20},
    {hour: '10:00', temperature: 20},
    {hour: '10:00', temperature: 20}
]*/

const useStyles = makeStyles({
    back: {
      marginTop: "20px",
    },
});

const DisplayWeather = () => {

    const classes = useStyles();

    const [wind, setWind] = useState(0);
    const [rad, setRad] = useState(0);
    const [buffer, setBuffer] = useState(null);
    const [data, setData] = useState(null);
    const [time, setTime] = useState(null);

    useEffect( () =>{
        const callApi = async () =>{
            let currTime = (new Date()).toLocaleTimeString();
            setTime(currTime);
            let ts = Math.round((new Date()).getTime() / 1000);
            let claveapi = 'cmktt6j4diosqgfidj0f9u0twtvmofzi';
            let plainText = 'api-key' + claveapi + 'station-id101004t' + ts;
            let secretKey = 'rxidkkcbjxdjh293omoownp3f9qoe2no'; 
            let signature = CryptoJS.HmacSHA256(plainText, secretKey).toString(CryptoJS.enc.Hex);

            const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://api.weatherlink.com/v2/current/101004', {
                params:{
                    'api-key': claveapi,
                    'api-signature': signature,
                    't': ts
                },
            });

            setWind(data.sensors[0].data[0].wind_speed_last);
            setRad(data.sensors[0].data[0].solar_rad);
        };
        callApi();
        const interval = setInterval(() => callApi(), 300000)
        return () => {
          clearInterval(interval);
        }
    }, []);

    useEffect( () =>{
        const callHistoric = async () =>{
            //Objeto fecha
            let before = new Date();
            before.setHours(before.getHours() - 2);
            //Convirtiendo a UNIX timestamp la diferencia calculada
            let first = Math.round(before.getTime() / 1000);
            //Convirtiendo a UNIX timestamp la fecha actual
            let last = Math.round((new Date()).getTime() / 1000);
            let claveapi = 'cmktt6j4diosqgfidj0f9u0twtvmofzi';

            let plainText = 'api-key' + claveapi + 'end-timestamp' + last + 'start-timestamp'+ first +'station-id101004t' + last;
            let secretKey = 'rxidkkcbjxdjh293omoownp3f9qoe2no'; 
            let signature = CryptoJS.HmacSHA256(plainText, secretKey).toString(CryptoJS.enc.Hex);

            const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://api.weatherlink.com/v2/historic/101004', {
                params:{
                    'api-key': claveapi,
                    'api-signature': signature,
                    't': last,
                    'start-timestamp': first,
                    'end-timestamp': last
                },
            });
            setBuffer(data.sensors[0].data);
        };
        callHistoric();
        const intervalo = setInterval(() => callHistoric(), 300000)
        return () => {
          clearInterval(intervalo);
        }
    }, []);

    useEffect( () =>{
        const dataStructure = () =>{
            if(buffer != null){
                let arr = [];
                buffer.forEach((item) => {
                    let convertedTemp = parseFloat(((item.temp_avg - 32) * (5/9)).toFixed(2));
                    let miliseconds = item.ts * 1000;
                    let time = new Date(miliseconds);
                    let minutes = time.getMinutes();
                    if(minutes === 0){
                        minutes = '00'
                    }
                    let formattedTime = time.getHours() + ':' + minutes;
                    arr.push({hour: formattedTime, temperature: convertedTemp});
                });
            console.log(arr);
            setData(arr);
            }
        };
        dataStructure();
    }, [buffer]);

    return(
        <div>
            <Paper elevation ={1} className={classes.back}>
                <Box p={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Box fontSize={30}>
                                Datos de Estación San José
                            </Box>
                            <Box>
                                (datos obtenidos en tiempo real: {time})
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="space-between">
                            <DisplayStat title="Velocidad de viento" img="https://media.giphy.com/media/ygx8X4iqGFVwRDOCn7/giphy.gif" data={wind} units="mph"/>
                            <DisplayStat title="Radiación solar" img="https://media.giphy.com/media/QTBptzxDcMWsG9OeFw/giphy.gif" data={rad} units="w/m²"/>
                            <DisplayTemp data={data}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </div>
    );
}

export default DisplayWeather;