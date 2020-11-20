import Menu from './components/Menu';
import ReactDOM from 'react-dom';

import './App.css';
import AppBar from './components/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import ChartsManager from './components/ChartsManager';
import Dropdown from './components/Dropdown';
import DropdownSimple from './components/DropdownSimple';
import DropdownBase from './components/DropdownBase';
import Combustibles from './components/Combustibles';
import Calculator from './components/Calculator';
import Route from './components/Route';
import Edificacion from './components/Edificacion';
import EdificacionSegundo from './components/EdificacionSegundo'
import SectionHeader from './components/SectionHeader';
import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TeamContent from './components/TeamContent';
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

const useStyles = makeStyles(theme => ({
  mainContent: {
      marginTop: 20
  },
  section: {
    marginTop: 30
  }

}));
function App() {

  const classes = useStyles();
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
        <Container className={classes.mainContent}>
            <SectionHeader title="Generaciones de GEI por tipo de edificio"></SectionHeader>
            <br/>
            <Edificacion edif={edificacion}></Edificacion>

            <div className={classes.section}>
            <SectionHeader title="Generaciones de GEI por varios parámetros"></SectionHeader>
            <br/>
            <EdificacionSegundo edif={edificacion} tech={technology} temp={temporadas}></EdificacionSegundo>
            </div>
        </Container>
      </Route>
      <Route path="/visualizacion">
        <ChartsManager></ChartsManager>
      </Route>
      <Route path="/equipo">
        <Container>
          <TeamContent></TeamContent>
        </Container>
      </Route>
    </div>
    
  );
}

export default App;
