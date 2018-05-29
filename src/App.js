import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Imoveis from './pages/Imoveis';

class App extends Component {
  render() {
    return (
      <div className="row sem-margem">
        <div className="col l2 m4 s5 grey darken-3" style={{ height: window.innerHeight }}>
          <SideBar/>
        </div>
        <div className="col l10 m8 s7 sem-padding">
          <Switch>
            <Route path="/imoveis" component={Imoveis}/>
            <Route component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
