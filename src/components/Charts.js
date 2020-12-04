import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = ({data, title}) => {
    

    return(
        <div>
            <Typography variant="h6">
                {title}
            </Typography>
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