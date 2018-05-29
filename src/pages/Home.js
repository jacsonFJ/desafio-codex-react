import React, { Component } from 'react';

import NavBar from '../components/NavBar';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar titulo={'Início'} />
        <div className="container-person">
          <div className="row">
            <div className="col s12">
              <h2 className="grey-text text-darken-3">Bem Vindo</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
