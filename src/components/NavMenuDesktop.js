import React, { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import LogInModal from './LogInModal';
import { Grid, Button, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  button: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'none',
    height: '100%',
    borderRadius: '0',
    padding: '0 24px 0 24px'
  },  
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

export default function NavMenuDesktop() {
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <Grid>
      <ThemeProvider theme={theme}>
        <Button 
          className={classes.button}
          component={Link}
          to='/vehicles' 
        >
          Vehicles
        </Button>
        <Button 
          className={classes.button} 
          component={Link}
          to='/about'
        >
          About Us
        </Button>
        <Button 
          className={classes.button} 
          component={Link}
          to='/contact'
        >
          Contact
        </Button>
        <ButtonGreen 
          text='Log In' 
          onClick={handleModalOpen} 
          className='NavDesktopBtn'
          style={{marginLeft: '24px', width: '75px'}}
        />
        <LogInModal
          open={modal}
          handleClose={handleModalClose}
        /> 
      </ThemeProvider>
    </Grid>
  )
}