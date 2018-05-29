import React, { Component } from 'react';

class CardImovel extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={ this.props.imagem } alt="Foto do imóvel"/>
          <span className="card-title-person">
            { this.props.valor }
            <br/>
            { this.props.tipo }
          </span>
          {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
        </div>
        <div className="card-content">
          <span className="card-title">{ this.props.titulo }</span>
          <p>{ this.props.localizacao }</p>
        </div>
      </div>
    );
  }
}

export default CardImovel;
