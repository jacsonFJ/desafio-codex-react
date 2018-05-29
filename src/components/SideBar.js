import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div id="side-nav">
        <div className="row">
          <div className="container">
            <img className="responsive-img" src="/assets/logo.png" alt="TecImob"/>
          </div>
        </div>
        <div className="row">
          <div id="col-side-nav" className="collection">
            <Link to="/" className="waves-effect waves-light collection-item">
              <i className="material-icons left">dashboard</i>
              Início
            </Link>
            <Link to="/imoveis" className="waves-effect waves-light collection-item">
              <i className="material-icons left">home</i>
              Imóveis
            </Link>
          </div>
        </div>
        <div className="center-align" id="footer">
          <span className="white-text">2015 - Tecimob</span>
        </div>
      </div>
    );
  }
}

export default SideBar;
