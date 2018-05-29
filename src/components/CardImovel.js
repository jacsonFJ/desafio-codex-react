import React, { Component } from 'react';
import ImovelForm from '../forms/ImovelForm';

class CardImovel extends Component {

  componentDidMount(){
    window.Materialize.Dropdown.init( document.getElementById('ddt'+this.props.id) );
  }

  openModal(){
    let instance = window.Materialize.Modal.init( document.getElementById('modalImovelForm'+this.props.id) );
    instance.open();
  }

  render() {
    return (
      <div className="card medium">
        <ImovelForm imovel={this.props} submit={this.props.editar}/>
        <div className="card-image">
          <img src={this.props.imagem} alt="Foto do imóvel" />
          <span className="card-title-person">
            {this.props.valor}
            <br />
            {this.props.tipo}
          </span>
        </div>
        <div className="card-fab">
          <a id={'ddt'+this.props.id} className="btn-floating halfway-fab green lighten-1" data-target={'dd'+this.props.id}>
            <i className="material-icons">more_vert</i>
          </a>
          <ul id={'dd'+this.props.id} className='dropdown-content'>
            <li><a onClick={this.openModal.bind(this)}>Editar</a></li>
            <li><a onClick={() => this.props.remover(this.props.id)}>Excluir</a></li>
          </ul>
        </div>
        <div className="card-content">
          <span className="card-title">{this.props.titulo}</span>
          <p>{this.props.localizacao}</p>
        </div>
      </div>
    );
  }
}

export default CardImovel;
