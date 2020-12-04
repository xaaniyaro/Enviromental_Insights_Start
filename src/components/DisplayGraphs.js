import React from 'react';
import Charts from './Charts';

const data1 = [
    {name: 'Ene', wattshporaño: 94.93},
    {name: 'Feb', wattshporaño: 79.52},
    {name: 'Mar', wattshporaño: 153.18},
    {name: 'Abr', wattshporaño: 137.73},
    {name: 'May', wattshporaño: 174.71},
    {name: 'Jun', wattshporaño: 178.46},
    {name: 'Jul', wattshporaño: 193.54},
    {name: 'Ago', wattshporaño: 193.14},
    {name: 'Sep', wattshporaño: 119.45},
    {name: 'Oct', wattshporaño: 105.22},
    {name: 'Nov', wattshporaño: 83.58},
    {name: 'Dic', wattshporaño: 91.26}
];

const data2 = [
    {name: 'Ene', wattshporaño: 106.29},
    {name: 'Feb', wattshporaño: 93.60},
    {name: 'Mar', wattshporaño: 174.12},
    {name: 'Abr', wattshporaño: 161.22},
    {name: 'May', wattshporaño: 198.87},
    {name: 'Jun', wattshporaño: 200.37},
    {name: 'Jul', wattshporaño: 220.88},
    {name: 'Ago', wattshporaño: 214.15},
    {name: 'Sep', wattshporaño: 136.85},
    {name: 'Oct', wattshporaño: 114.59},
    {name: 'Nov', wattshporaño: 102.84},
    {name: 'Dic', wattshporaño: 106.03}
];

const data3 = [
    {name: 'Ene', wattshporaño: 160.29},
    {name: 'Feb', wattshporaño: 39.60},
    {name: 'Mar', wattshporaño: 147.12},
    {name: 'Abr', wattshporaño: 116.22},
    {name: 'May', wattshporaño: 189.87},
    {name: 'Jun', wattshporaño: 20.37},
    {name: 'Jul', wattshporaño: 202.88},
    {name: 'Ago', wattshporaño: 241.15},
    {name: 'Sep', wattshporaño: 163.85},
    {name: 'Oct', wattshporaño: 141.59},
    {name: 'Nov', wattshporaño: 120.84},
    {name: 'Dic', wattshporaño: 160.03}
];

const data4 = [
    {name: 'Ene', wattshporaño: 301.29},
    {name: 'Feb', wattshporaño: 85.60},
    {name: 'Mar', wattshporaño: 75.12},
    {name: 'Abr', wattshporaño: 189.22},
    {name: 'May', wattshporaño: 154.87},
    {name: 'Jun', wattshporaño: 10.37},
    {name: 'Jul', wattshporaño: 240.88},
    {name: 'Ago', wattshporaño: 56.15},
    {name: 'Sep', wattshporaño: 63.85},
    {name: 'Oct', wattshporaño: 72.59},
    {name: 'Nov', wattshporaño: 180.84},
    {name: 'Dic', wattshporaño: 61.03}
];

const dataList = {
    cs : [
        {year:2018, data:data1},
        {year:2019, data:data2}],
    sn : [
        {year:2018, data:data3},
        {year:2019, data:data2}],
    gp : [
        {year:2018, data:data4},
        {year:2019, data:data1}],
    sc: [
        {year:2018, data:data3},
        {year:2019, data:data4}],
    pi : [
        {year:2018, data:data1},
        {year:2019, data:data3}],
    cm: [
        {year:2018, data:data4},
        {year:2019, data:data2}],
    co : [
        {year:2018, data:data4},
        {year:2019, data:data3}]
};

const DisplayGraphs = ({selected}) => {
        //console.log(selected);
    let chosen = dataList[selected];
        //console.log(chosen);
        if(chosen !== undefined){
            return(
                <div>
                {chosen.map((item) => (
                    <Charts 
                    title={item.year}
                    data={item.data} />
                ))}
                </div>
            );
        }
        else{
            return null;
        }
}

export default DisplayGraphs;