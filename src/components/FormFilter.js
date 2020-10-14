import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ButtonGreen from './ButtonGreen';
import LocationSelect from './LocationSelect';
import TypeSelect from './TypeSelect';
import DatePickers from './DatePickers';

//const mediaQuery = useMediaQuery('(max-width:370px)');

const useStyles = makeStyles({
  rootSelect: {
    width: '100%',
  },
  margin: {
    marginTop: '16px',
  },
  rootInput: {
    color: '#ffffff',
    marginLeft: '8px',
  },
  dateInput: {      
    width: '45%',
    marginTop: '16px',
  },
  focused: {}
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00D60F',
    },
  }
});

export default function FormFilter() {
  const classes = useStyles();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [dateLower, handleDateLower] = useState(new Date());
  const [dateUpper, handleDateUpper] = useState(new Date());

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const handleType = (event) => {
    setType(event.target.value);
  }

  return (
    // EXTRACT THEMEPROVIDER
      // to use on multiple pages
    <ThemeProvider theme={theme}>
      <div className='JumboForm'>
        <LocationSelect
          formControl={classes.margin} 
          labelRoot={classes.rootInput} 
          labelFocused={classes.focused}
          rootSelect={classes.rootSelect}
          location={location}
          handleLocation={handleLocation}
        />
        <TypeSelect 
          formControl={classes.margin} 
          labelRoot={classes.rootInput} 
          labelFocused={classes.focused}
          rootSelect={classes.rootSelect}
          type={type}
          handleType={handleType}
        />
        <DatePickers
          dateInputClass={classes.dateInput}
          dateLower={dateLower}
          handleDateLower={handleDateLower}
          dateUpper={dateUpper}
          handleDateUpper={handleDateUpper}
        />
        <ButtonGreen 
          text='Search'
          to={{
            pathname: '/rent-a-car/vehicles',
            state: {
              type: type,
            }
          }}
          component={Link}
          startIcon={<SearchIcon style={{marginRight: '-4px'}}/>}
          style={{
            width: '120px',
            margin: '0 auto',
            marginTop: '18px',
          }}
        />
      </div>
    </ThemeProvider>
  )
}