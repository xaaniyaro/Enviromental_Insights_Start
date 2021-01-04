import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '../utilities/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
            <Link href="/">
              <img src="logo.svg" alt="tec|s&b" style={{width:"170px", height:"80px"}}/>
            </Link>
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
      <Toolbar /> {/* Se pone para agregar un pequeño espacio de la barra y el contenido */}
    </div>
  );
}