import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = ({ data}) => {
    

    return(
        <div>
            <BarChart width={400} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="Watts/h por año" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Charts;