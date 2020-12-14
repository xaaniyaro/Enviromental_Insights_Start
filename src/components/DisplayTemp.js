import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label} from 'recharts';
import Box from '@material-ui/core/Box';

const DisplayTemp = ({data}) => {
    if(data != null){
        return(
            <div>
                <Box fontSize={24} fontWeight="bold" textAlign="center">
                    Temperatura
                </Box>
                <LineChart width={500} height={250} data={data}
                    margin={{top: 5, right: 10, left: 10, bottom: 20}}>
                <XAxis dataKey="hour">
                    <Label value="Hora" offset={0} position="bottom" />
                </XAxis>
                <YAxis label={{ value: 'C°', angle: 0, position: 'insideLeft' }} />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            </div>
        );
    }
    else{
        return null;
    }
}

export default DisplayTemp;