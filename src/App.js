import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/counter';
import ProvincePage from './pages/province';
import CityPage from './pages/city';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={CounterPage}/>
      <Route exact path="/province" component={ProvincePage}/>
      <Route exact path="/city" component={CityPage}/>
    </Switch>
  )
}

export default App;
