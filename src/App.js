import Menu from './components/Menu';
import ReactDOM from 'react-dom';

import './App.css';
import AppBar from './components/AppBar';
import SolarCalculator from './components/SolarCalculator';
import ChartsManager from './components/ChartsManager';
import Grid from '@material-ui/core/Grid';
import Dropdown from './components/Dropdown';
import DropdownSimple from './components/DropdownSimple';
import DropdownBase from './components/DropdownBase';
import Combustibles from './components/Combustibles';
import Calculator from './components/Calculator';
import Route from './components/Route';
import TestSelect from './components/TestSelect';
import AreaInput from './components/AreaInput';
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
//import Content from './components/Content';

//


const combustibles = [
  {
    "label": "Diesel",
    "value": 0.00027 
  },
  {
    "label": "Gas natural",
    "value": 0.0002
  },
  {
    "label": "GLP",
    "value": 0.00023
  }
];

const tecnologia = [
  {
    "label": "Colectores térmicos",
    "valueheat": 280.1,
    "valueelec": 0,
    "img" : "/termic.png"
  },
  {
    "label": "Colectores híbridos",
    "valueheat": 228.97,
    "valueelec": 44.49,
    "img" : "/hybrid.png"
  },
  {
    "label": "Paneles fotovoltáicos",
    "valueheat": 0,
    "valueelec": 171.62,
    "img" : "/panel.png"
  }
];

const edificacion = [
  { "Residencial": [1000, 20] },
  { "No residencial": [100, 5] }
];

const technology = [
  { "PCM": [2, 3] },
  { "Aislante": [4, 5] },
  { "Pintura": [6, 7] }
];

const temporadas = [
  { "Verano (Abr - Oct)": [2, 3] },
  { "Invierno (Nov - Mar)": [4, 5] },
];

function App() {
  const [selected, setSelected] = useState(tecnologia[0]);
  const [selectedTwo, setSelectedTwo] = useState(tecnologia[0]);
  const [selectedThree, setSelectedThree] = useState(tecnologia[0]);
  const [selectedComb, setSelectComb] = useState(combustibles[0]);
  //const [toggleTech, setToggleTech] = useState(true);
  

  return (
    <div>
      <AppBar />
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/potencialsolar">
          <div className="ui container body">
          <h1 className="ui header">Producción energética total en Monterrey</h1>
            <DropdownSimple
                options={tecnologia} 
                label="Selecciona una tecnología" 
                selected={selected}
                onSelectedChange={setSelected}/>
          <h1 className="ui header">Producción energética específica</h1>
          <Dropdown
                options={tecnologia} 
                label="Selecciona una tecnología" 
                selected={selectedTwo}
                onSelectedChange={setSelectedTwo}/>
          <h1 className="ui header">Potencial de reducción anual de GEI total</h1>
          <DropdownBase
                options={tecnologia} 
                label="Selecciona una tecnología" 
                selected={selectedThree}
                onSelectedChange={setSelectedThree}/>
          <Combustibles
          combustibles={combustibles}
          selectedComb={selectedComb}
          setSelectComb={setSelectComb}
          selected={selectedThree} />
          <Calculator 
            tecnologia={selectedThree}
            combustible={selectedComb}
          />
          <h1 className="ui header">Potencial de reducción anual de GEI específica</h1>
          
          </div>
      </Route>
      <Route path="/edificiossustentables">
        <Container>
          <h1>Generación de GEI por tipo de edificación</h1>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
              < TestSelect options={edificacion} label="Tipo de edificación"/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AreaInput/>
              </Grid>
            </Grid>
            <h1>Generación de GEI por tipo de edificación y tecnología</h1>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
              < TestSelect options={edificacion} label="Tipo de edificación"/>
              </Grid>
              <Grid item xs={12} sm={4}>
              <TestSelect options={technology} label="Tipo de tecnología"/>
              </Grid>
              <Grid item xs={12} sm={4}>
              
              </Grid>
              <Grid item xs={12} sm={4}>
              <TestSelect options={temporadas} label="Temporada"/>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AreaInput />
              </Grid>
            </Grid>
        </Container>
      </Route>
      <Route path="/visualizacion">
        <ChartsManager></ChartsManager>
      </Route>
      <Route path="/equipo">
        <h1>Equipo</h1>
      </Route>
    </div>
    
  );
}

export default App;
