import React, { Component } from 'react';

class ImovelForm extends Component {
  constructor() {
    super();
    this.state = this.FORMZERADO;
    this.selectIns = null;
  }

  get FORMZERADO() {
    return {
      titulo: '',
      localizacao: '',
      tipo: 'Venda',
      valor: ''
    };
  }

  componentDidMount(){
    this.selectIns = window.Materialize.FormSelect.init( document.getElementById('tipo') );
    window.Materialize.updateTextFields();
  }

  closeModal(){
    this.setState(this.FORMZERADO);
    let instance = window.Materialize.Modal.init(document.getElementById('modalImovelForm'));
    this.selectIns.input.value = 'Venda'
    instance.close();
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.titulo || !this.state.localizacao || !this.state.valor) {
      alert('Preencha todos os campos!');
      return false;
    }

    this.props.submit(this.state);
    this.closeModal();
  }

  render() {
    return (
      <div id="modalImovelForm" className="modal">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="modal-content">
            <h4>Novo Imóvel</h4>
            <div className="row">
              <div className="input-field col s12 m6">
                <input placeholder="Digite o título do imóvel" id="titulo" type="text" className="validate" value={this.state.titulo} onChange={this.onChange.bind(this)} />
                <label htmlFor="titulo">Título</label>
              </div>
              <div className="input-field col s12 m6">
                <input id="localizacao" placeholder="Digite a localização do imóvel" type="text" className="validate" value={this.state.localizacao} onChange={this.onChange.bind(this)} />
                <label htmlFor="localizacao">Localização</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m4">
                <select id="tipo" value={this.state.tipo} onChange={this.onChange.bind(this)}>
                  <option value="Venda">Venda</option>
                  <option value="Locação">Locação</option>
                </select>
                <label htmlFor="tipo">Tipo</label>
              </div>
              <div className="input-field col s6 m4">
                <input id="valor" placeholder="Digite o valor do imóvel" type="text" className="validate" value={this.state.valor} onChange={this.onChange.bind(this)} />
                <label htmlFor="valor">Valor do Imóvel</label>
              </div>
            </div>
          </div>
          <div className="modal-footer grey lighten-3">
            <button type="button" className="waves-effect waves-ligth btn red" onClick={this.closeModal.bind(this)}>Cancelar</button>
            <button type="submit" className="waves-effect waves-ligth btn green lighten-1">Salvar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ImovelForm;
