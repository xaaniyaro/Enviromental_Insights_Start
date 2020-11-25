import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = ({ data}) => {
    

    return(
        <div>
            <BarChart width={500} height={200} data={data}
            margin={{top: 5, right: 10, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="wattshporaño" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Charts;