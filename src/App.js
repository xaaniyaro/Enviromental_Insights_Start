import './App.css';
import AppBar from './components/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import ChartsManager from './components/ChartsManager';
import Route from './components/Route';
import Edificacion from './components/Edificacion';
import EdificacionSegundo from './components/EdificacionSegundo'
import SectionHeader from './components/SectionHeader';
import { Container } from '@material-ui/core';
//import Content from './components/Content';

//


/*const combustibles = [
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
];*/

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
  },
}));
function App() {

  const classes = useStyles();
  //const [toggleTech, setToggleTech] = useState(true);
  

  return (
    <div>
      <AppBar />
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/potencialsolar">
          
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
        <Container>
        <ChartsManager></ChartsManager>
        </Container>
      </Route>
      <Route path="/equipo">
        <div classes={classes.teamBackground}>
        <Container>
          
        </Container>
        </div>
      </Route>
    </div>
    
  );
}

export default App;
