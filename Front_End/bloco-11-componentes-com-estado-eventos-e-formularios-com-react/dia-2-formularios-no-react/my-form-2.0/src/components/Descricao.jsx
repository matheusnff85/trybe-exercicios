import React from "react";

class DescricaoDoCargo extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Resumo do currículo:
        <textarea 
          name="DescricaoDoCargo" 
          cols="40" 
          rows="8"
          maxLength={500}
          placeholder='Escreva aqui.'
          value={value}
          onChange={handleChange}
          required
        >
        </textarea>
      </label>
    )
  }
}

export default DescricaoDoCargo;