import Distancer from "./pages/distancer/distancer"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/distancer">
          <Link to="/distancer/1">Den Lange</Link>
          <Link to="/distancer/2">Stafetten</Link>
        </Route>
        <Route exact path="/distancer/:id">
           <Distancer/>
        </Route>
        <Route path="/">
          <Link to="/forside">Forside</Link>
          <Link to="/distancer">Distancer</Link> 
          <Link to="/distancer/1">Den Lange</Link> 
        </Route>s
      </Switch>
  </Router>
);
}

export default App;
