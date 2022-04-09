import React from "react";
import Nome from './components/Nome';
import Email from './components/Email';
import Cpf from './components/Cpf';
import Endereço from './components/Endereço';
import Cidade from './components/Cidade';
import Estado from './components/Estado';
import Tipo from './components/Tipo';
import Curriculo from "./components/Curriculo";
import Cargo from "./components/Cargo";
import DescricaoDoCargo from './components/Descricao'

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.validateAdress = this.validateAdress.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.state = {
      Nome: '',
      Email: '',
      Cpf: '',
      Endereço: '',
      Cidade: '',
      Estado: '',
      Tipo: '',
      Resumo: '',
      Cargo: '',
      DescricaoDoCargo: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  validateAdress({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value.replace(/[^a-záàâãéèêíïóôõöúçñA-Z0-9-' '\d]/ig, ""),
    });
  }

  validateCity({ target }) {
    const { value, name } = target;
    isNaN(parseInt(value[0])) ? this.setState({[name]: value}) : this.setState({[name]: ''})
  }

  render(){
    return(
      <form>
        <fieldset>
          <Nome value={this.state.Nome} handleChange={this.handleChange} />
          <Email value={this.state.Email} handleChange={this.handleChange}/>
          <Cpf value={this.state.Cpf} handleChange={this.handleChange}/>
          <Endereço value={this.state.Endereço} validateAdress={this.validateAdress}/>
          <Cidade value={this.state.Cidade} handleChange={this.handleChange} validateCity={this.validateCity}/>
          <Estado value={this.state.Estado} handleChange={this.handleChange}/>
          <Tipo handleChange={this.handleChange}/>
        </fieldset>
        <fieldset>
          <Curriculo value={this.state.Resumo} handleChange={this.handleChange}/>
          <Cargo value={this.state.Cargo} handleChange={this.handleChange}/>
          <DescricaoDoCargo value={this.state.DescricaoDoCargo} handleChange={this.handleChange}/>
        </fieldset>
        <button>Enviar</button>
        <button>Limpar</button>
      </form>
    )
  }
}

export default Form;