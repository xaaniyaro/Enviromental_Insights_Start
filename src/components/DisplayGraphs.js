import React from 'react';
import DisplayHistoricData from './DisplayHistoricData';

//Casa solar
const data1 = [
    {name: 'Ene', 2018: 94.93334717, 2019:93.46144133},
    {name: 'Feb', 2018: 79.52229467, 2019:102.0818953 },
    {name: 'Mar', 2018: 153.184964, 2019:106.5998143 },
    {name: 'Abr', 2018: 137.7347125, 2019:171.244589},
    {name: 'May', 2018: 174.708675 , 2019:143.4640262 },
    {name: 'Jun', 2018: 178.4570905, 2019:178.8332388 },
    {name: 'Jul', 2018: 193.5429413 , 2019:189.9749507},
    {name: 'Ago', 2018: 193.1438207, 2019:193.4039905 },
    {name: 'Sep', 2018: 119.33815, 2019:151.3005945 },
    {name: 'Oct', 2018: 105.219169, 2019:133.8770143},
    {name: 'Nov', 2018: 83.5779525, 2019:100.669067},
    {name: 'Dic', 2018: 91.26069267, 2019:99.84758017}
];

//Guadalupe
const data2 = [
    {name: 'Ene', 2018: 95.03839633  , 2019:94.353902},
    {name: 'Feb', 2018: 81.3342525, 2019:103.8384675 },
    {name: 'Mar', 2018: 159.0488388, 2019:109.7102493 },
    {name: 'Abr', 2018: 148.7115547, 2019:185.0557768},
    {name: 'May', 2018: 184.5424388 , 2019:148.2443955 },
    {name: 'Jun', 2018: 189.2360547, 2019:196.9514883 },
    {name: 'Jul', 2018: 215.00616 , 2019:209.944281},
    {name: 'Ago', 2018: 205.8838672, 2019:211.0309843 },
    {name: 'Sep', 2018: 123.0334505, 2019:149.5922355 },
    {name: 'Oct', 2018: 101.7254092, 2019:136.4983147},
    {name: 'Nov', 2018: 89.10735733, 2019:102.1025558},
    {name: 'Dic', 2018: 92.698341, 2019:102.8003238}
];

const dataList = {
    cs : data1,
    gp : data2
};

const DisplayGraphs = ({selected}) => {
        //console.log(selected);
    let chosen = dataList[selected];
        //console.log(chosen);
        if(chosen !== undefined){
            return(
                <div>
                    <DisplayHistoricData 
                    data={chosen} />
                </div>
            );
        }
        else{
            return null;
        }
}

export default DisplayGraphs;