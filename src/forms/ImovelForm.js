import React, { Component } from 'react';

class ImovelForm extends Component {
  constructor() {
    super();
    this.state = this.FORMZERADO;
    this.selectIns = null;
  }

  get FORMZERADO() {
    return {
      id: '',
      titulo: '',
      localizacao: '',
      tipo: 'Venda',
      valor: '',
      imagem: '/assets/predio.jpg'
    };
  }

  componentDidMount(){
    if(this.props.imovel){
      this.setState(this.props.imovel);
    }
    setTimeout(() => this.selectIns = window.Materialize.FormSelect.init( document.getElementById('tipo'+this.state.id) ), 500);
    window.Materialize.updateTextFields();
  }

  carregaImagem(e){
    if(e.target.files[0]){
      let reader = new FileReader();
      reader.onload = arq => this.setState({ imagem: arq.target.result });
      reader.readAsDataURL(e.target.files[0]);
    }else{
      alert('Favor selecione uma foto!');
    }
  }

  closeModal(){
    this.setState(this.props.imovel ? this.props.imovel : this.FORMZERADO);
    this.selectIns.input.value = this.props.imovel ? this.props.imovel.tipo : 'Venda';
    let instance = window.Materialize.Modal.init(document.getElementById('modalImovelForm'+this.state.id));
    instance.close();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.titulo || !this.state.localizacao || !this.state.valor) {
      alert('Preencha todos os campos!');
      return false;
    }

    this.props.submit(JSON.parse(JSON.stringify(this.state)));
    this.closeModal();
  }

  render() {
    return (
      <div id={'modalImovelForm'+this.state.id} className="modal imovelForm">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="modal-content">
            <h4>Novo Imóvel</h4>
            <div className="row">
              <div className="input-field col s12 m6">
                <input name="titulo" placeholder="Digite o título do imóvel" type="text" className="validate" value={this.state.titulo} onChange={this.onChange.bind(this)} />
                <label>Título</label>
              </div>
              <div className="input-field col s12 m6">
                <input name="localizacao" placeholder="Digite a localização do imóvel" type="text" className="validate" value={this.state.localizacao} onChange={this.onChange.bind(this)} />
                <label>Localização</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m4">
                <select name="tipo" id={'tipo'+this.state.id} value={this.state.tipo} onChange={this.onChange.bind(this)}>
                  <option value="Venda">Venda</option>
                  <option value="Locação">Locação</option>
                </select>
                <label>Tipo</label>
              </div>
              <div className="input-field col s6 m4">
                <input name="valor" placeholder="Digite o valor do imóvel" type="text" className="validate" value={this.state.valor} onChange={this.onChange.bind(this)} />
                <label>Valor do Imóvel</label>
              </div>
            </div>
            <div className="row">
              <div className="file-field input-field col s12">
                <div className="btn">
                  <span>Foto</span>
                  <input type="file" onChange={this.carregaImagem.bind(this)}/>
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text"/>
                </div>
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
