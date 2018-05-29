import React, { Component } from 'react';

import Axios from 'axios';

import NavBar from '../components/NavBar';
import ImovelForm from '../forms/ImovelForm';
import CardImovel from '../components/CardImovel';

class Imoveis extends Component {

  constructor(){
    super();
    this.state = {imoveis: []};
    Axios.get('http://localhost:3000/imoveis.json')
      .then(resposta => this.setState({ imoveis: resposta.data.dados }))
      .catch(erro => alert('Erro no servidor!'));
  }
  
  openModal(){
    let instance = window.Materialize.Modal.init( document.getElementById('modalImovelForm') );
    instance.open();
  }

  addImovel(imovel){
    imovel['id'] = this.state.imoveis.length + 1;
    let imoveis = this.state.imoveis;
    imoveis.push(imovel);
    this.setState({ imoveis: imoveis });
  }
  
  render() {
    return (
      <div>
        <ImovelForm submit={this.addImovel.bind(this)}/>
        <NavBar titulo={'Meus Imóveis'} botao={{ titulo: 'Novo Imóvel', click: this.openModal.bind(this) }}/>
        <div id="container-imoveis" className="container-person">
          <div className="row">
            { this.state.imoveis.map( imo => (
              <div key={imo.id} className="col s12 m4 l3">
                <CardImovel {...imo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Imoveis;
