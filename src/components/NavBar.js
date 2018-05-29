import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    return (
      <nav className="grey lighten-1">
        <div className="nav-wrapper container-person">
          <a to="/" className="brand-logo grey-text text-darken-3 hide-on-small-only left">{ this.props.titulo }</a>
          {/* Botão Esquerdo */}
          {this.props.botao && (
            <ul id="nav-mobile" className="right">
              <li>
                <button className="waves-effect waves-light btn green lighten-1" onClick={this.props.botao.click}>
                  { this.props.botao.titulo }
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  titulo: PropTypes.string.isRequired,
  botao: PropTypes.shape({
    titulo: PropTypes.string,
    click: PropTypes.func
  })
}

export default NavBar;