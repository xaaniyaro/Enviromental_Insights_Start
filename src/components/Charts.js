import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Charts = ({data, title}) => {
    

    return(
        <div>
            <BarChart width={400} height={200} data={data}
            margin={{top: 5, right: 5, left: 5, bottom: 5}}>
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