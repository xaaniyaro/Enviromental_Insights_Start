import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = ({year, data}) => {
    

    return(
        <div>
            <h1>{year}</h1>
            <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="Wh" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Charts;