import React from "react";

class Curriculo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Resumo do currículo:
        <textarea 
          name="Resumo" 
          cols="50" 
          rows="15"
          maxLength={1000}
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

export default Curriculo;