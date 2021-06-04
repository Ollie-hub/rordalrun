import React from "react";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style/App.scss';
import SideNavbar from "./components/Navbar/Navbar";
import Forside from './pages/forside/forside'
import Distancer from "./pages/distancer/distancer"
import Deltagerliste from "./pages/deltagerliste/deltagerliste"
import Tilmelding from "./pages/tilmelding/tilmelding";
import Login from "./pages/takfortilmelding/takfortilmelding";

function App() {
  return (
    <Router>
      <SideNavbar/>
      <Switch>
        <Route exact path='/' component={Forside} />
        <Route path='/om' component={Deltagerliste} />
        <Route path='/distancer' component={Distancer}> 
        </Route>
        
        <Route path='/tilmelding' component={Tilmelding} />
        <Route path='/login' component={Login} />
      </Switch>
  </Router>
);
}

export default App;
