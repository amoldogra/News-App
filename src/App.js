
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route path="/"><News pageSize={8} country="in" category="general"/></Route>
          <Route path="/buisness"><News pageSize={8} country="in" category="buisness"/></Route>
          <Route path="/entertainment"><News pageSize={8} country="in" category="entertainment"/></Route>
          <Route path="/sports"><News pageSize={8} country="in" category="sports"/></Route>
          <Route path="/technology"><News pageSize={8} country="in" category="technology"/></Route>
          <Route path="/health"><News pageSize={8} country="in" category="health"/></Route>
          <Route path="/science"><News pageSize={8} country="in" category="science"/></Route>
          <Route path="/general"><News pageSize={8} country="in" category="general"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
