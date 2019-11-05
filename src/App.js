import React from 'react';
import Home from './Container/home/home';
import Order from './Container/order/order'
import History from './Container/History/History'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        < Order />
        </Route>
        <Route path="/home">
        < Home />
        </Route>
        <Route path="/history">
        < History />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

