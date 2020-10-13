import React, { useState } from 'react';
import ButtonGreen from './ButtonGreen';
import BrandLink from './BrandLink';
import LogInModal from './LogInModal';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Drawer, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const center = {
  display: 'flex',
  justifyContent: 'center',
}

const useStyles = makeStyles(({
  list: {
    width: 250,
  },
  listItem: {
    ...center,
    marginTop: '8px'
  },
  listText: {
    fontWeight: 800,
    textAlign: 'center',
    paddingRight: '55px',
  },
  center: {
    ...center,
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#1d1d1d',
      }
    }
  },
  palette: {
    type: 'dark',
  }
})

export default function NavMenuMobile() {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);
  const [modal, setModal] = useState(false);

  const openDrawer = () => {
    setDrawer(true)
  }

  const closeDrawer = () => {
    setDrawer(false);
  }

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <>
      <Icon fontSize='large' style={{alignSelf: 'center'}}>
        <MenuIcon fontSize='large' onClick={openDrawer}/>
      </Icon>
      <ThemeProvider theme={theme}>
        <Drawer anchor='right' open={drawer} onClose={closeDrawer} className={classes.drawer} >
          <List onClick={closeDrawer} className={classes.list}>
            <ListItem className={classes.center}>
              <BrandLink/>
            </ListItem>
            <Divider/>
            <ListItem 
              button 
              component={Link}
              to='/vehicles'
            >
              <ListItemIcon className={classes.center}><DriveEtaIcon /></ListItemIcon>
              <ListItemText className={classes.listText} primary='Vehicles' />
            </ListItem>
            <ListItem 
              button 
              component={Link} 
              to='/about'
            >
              <ListItemIcon className={classes.center}><InfoIcon /></ListItemIcon>
              <ListItemText className={classes.listText} primary='About Us' />
            </ListItem>
            <ListItem 
              button 
              component={Link} 
              to='/contact'
            >
              <ListItemIcon className={classes.center}><MailIcon /></ListItemIcon>
              <ListItemText className={classes.listText} primary='Contact' />
            </ListItem>
            <Divider/>
            <ListItem className={classes.listItem}>
              <ButtonGreen 
                text='Log In' 
                style={{width: '75px'}}
                onClick={handleModalOpen}
              />
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
      <LogInModal
        open={modal}
        handleClose={handleModalClose}
      />
    </>
  )
}