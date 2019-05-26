import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

import Navigator from './../Components/Navigator';
import Header from './../Components/Header';

import Content from './../Components/Content';
import Dashboard from './../Pages/Dashboard';
import MockTest from './../Pages/MockTest';
import TestScreen from './../Pages/TestScreen';

function Routeing() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Content} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/mock-test" exact component={MockTest} />
        <Route path="/live-test/:testname" exact component={TestScreen} />
      </div>
    </Router>
  );
}

export default Routeing;
