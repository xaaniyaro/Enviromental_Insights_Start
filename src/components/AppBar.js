import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import Link from './Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
//import Box from '@material-ui/core/Box';
//import Container from '@material-ui/core/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: "center"
  },
  appbar: {
    background: "#261149"
  },
  imgFormat:{
    imageRendering: '-webkit-optimize-contrast',
    imageRendering: '-o-crisp-edges',
    imageRendering: '-moz-crisp-edges',
    width: '134px',
    height: '45px'
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <div className={classes.title}>
            <Link href="/" ><img src="logo.png" alt="tec|s&b" className={classes.imgFormat}/></Link>
          </div>
            <div>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              > Herramientas
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link href="/potencialsolar"><MenuItem onClick={handleClose}>Potencial solar</MenuItem></Link>
                <Link href="/edificiossustentables"><MenuItem onClick={handleClose}>Edificios sustentables</MenuItem></Link>
                <Link href="/visualizacion"><MenuItem onClick={handleClose}>Visualización de datos</MenuItem></Link>
              </Menu>
            </div>
            <Link href="/contacto"><Button color="inherit">Contacto</Button></Link>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}