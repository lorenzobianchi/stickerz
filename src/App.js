import React, { Component } from 'react';
import Rotondi from './pages/Rotondi'
import Home from './pages/Home'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rotondi" component={Rotondi}/>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
