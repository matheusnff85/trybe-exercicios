import React from "react";
import states from './listaEstados';

class Estado extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Estado:  
        <select 
          name="Estado"
          value={value}
          onChange={handleChange}
          required
        >
          <option value='' disabled>Selecione seu estado</option>
          {states.map((state) => <option key={state}>{state}</option>)}
        </select>
      </label>
    )
  }
}

export default Estado;