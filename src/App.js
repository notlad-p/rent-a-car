import React from 'react';
import './css/main.css';
import Nav from './components/Nav';
import Home from './Home';
import Vehicles from './Vehicles';
import AboutUs from './AboutUs';
import Contact from './Contact';
import SingleCar from './components/SingleCar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>

      <Switch>
        <Route exact path='/rent-a-car/'>
          <Home/>
        </Route>
        <Route 
          exact 
          path='/rent-a-car/vehicles' 
          component={Vehicles}
        />
        <Route path='/rent-a-car/about'>
          <AboutUs/>
        </Route>
        <Route path='/rent-a-car/contact'>
          <Contact/>
        </Route>
        <Route 
          exact
          path='/rent-a-car/vehicles/:vehicleId' 
          component={SingleCar}
        />
      </Switch>
      
      <Footer/>
    </Router>
      {/* {console.log('Hello there')}
      {console.log('General Developer, you are a bold one..')} */}
    </div>
  );
}

export default App;
