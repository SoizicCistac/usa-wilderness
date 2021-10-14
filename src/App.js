import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Park from './pages/Park';
import ParkInfo from './pages/ParkInfo';
import Activity from './pages/Activity';
import Select from './pages/Select';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/select' component={Select}/>
      <Route path='/park' component={Park}/>
      <Route path='/activity' component={Activity}/>
      <Route path='/:id' component={ParkInfo}/>
    </Switch>
  );
}

export default App;
