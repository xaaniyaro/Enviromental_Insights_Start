import './App.css';
import AppBar from './components/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import ChartsManager from './components/ChartsManager';
import Route from './utilities/Route';
import EdificacionPrimero from './components/EdificacionPrimero';
import EdificacionSegundo from './components/EdificacionSegundo'
import HomeComponent from './components/HomeComponent';
import CarouselS from './components/CarouselS';
import SolarPrimero from './components/SolarPrimero';
import SolarSegundo from './components/SolarSegundo';
import { Container } from '@material-ui/core';
import Member from './components/TeamComponent';
import DisplayWeather from './components/DisplayWeather';
//import Content from './components/Content';
/*import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Tenor Sans'
    }
});*/

// Primer valor : energia electrica
// Segundo valor: energia termica
const tecnologia = [
  { "Colectores térmicos": ['ct', 0, 447.83]},
  { "Colectores híbridos PV/T": ['pv', 91.48, 168.31]},
  { "Colectores híbridos LCPV/T": ['lc', 115.56, 339.12 ]},
  { "Paneles fotovoltáicos": ['pf', 188.52, 0]}
];

const edificacion = [
  { "Residencial": ['yes'] },
  { "No residencial": ['no'] }
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
              <SolarPrimero tecnologia={tecnologia}></SolarPrimero>
              <br/>
              <SolarSegundo tecnologia={tecnologia}></SolarSegundo>
          </Container>
      </Route>
      <Route path="/edificiossustentables">
        <Container className={classes.mainContent}>
              <EdificacionPrimero edif={edificacion} />
              <br/>
              <EdificacionSegundo edif={edificacion} />
        </Container>
      </Route>
      <Route path="/visualizacion">
        <Container>
          <DisplayWeather/>
          <ChartsManager></ChartsManager>
        </Container>
      </Route>
      <Route path="/contacto">
        <Member></Member>
      </Route>
    </div>
    
  );
}

export default App;
