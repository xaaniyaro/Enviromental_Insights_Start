import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Charts = ({data}) => {
    

    return(
        <div>
            <BarChart width={700} height={300} data={data}
            margin={{top: 5, right: 5, left: 30, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name">
            </XAxis>
            <YAxis label={{ value: 'Wh/m²', angle: -90, position: 'insideLeft' }}/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="2018" fill="#f35d46" />
            <Bar dataKey="2019" fill="#4555a4" />
            </BarChart>
        </div>
    );
};

export default Charts;