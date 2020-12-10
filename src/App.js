import './App.css';
import AppBar from './components/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import ChartsManager from './components/ChartsManager';
import Route from './components/Route';
import Edificacion from './components/Edificacion';
import EdificacionSegundo from './components/EdificacionSegundo'
import HomeComponent from './components/HomeComponent';
import CarouselS from './components/CarouselS';
import SolarEstruc from './components/SolarEstruc';
import SolarEstructure from './components/SolarEstructure';
import { Container } from '@material-ui/core';
import Member from './components/Member';
//import Content from './components/Content';

//


// Primer valor : energia electrica
// Segundo valor: energia termica
const tecnologia = [
  { "Colectores térmicos": ['ct', 0, 280.1]},
  { "Colectores híbridos PV/T": ['pv', 44.49, 228.97]},
  { "Colectores híbridos LCPV/T": ['lc', 80.98, 120.56]},
  { "Paneles fotovoltáicos": ['pf', 171.62, 0]}
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
  },
}));
function App() {

  const classes = useStyles();
  //const [toggleTech, setToggleTech] = useState(true);
  

  return (
    <div>
      <AppBar />
      <Route path="/">
        <HomeComponent></HomeComponent>
      </Route>
      <Route path="/potencialsolar">
          <CarouselS />
          <Container>
              <SolarEstruc tecnologia={tecnologia}></SolarEstruc>
              <br/>
              <SolarEstructure tecnologia={tecnologia}></SolarEstructure>
          </Container>
      </Route>
      <Route path="/edificiossustentables">
        <Container className={classes.mainContent}>
              <Edificacion edif={edificacion}></Edificacion>
              <br/>
              <EdificacionSegundo tech={technology} temp={temporadas} edif={edificacion}/>
        </Container>
      </Route>
      <Route path="/visualizacion">
        <Container>
          <ChartsManager></ChartsManager>
        </Container>
      </Route>
      <Route path="/equipo">
        <Member></Member>
      </Route>
    </div>
    
  );
}

export default App;
