import React from "react";

class Cargo extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Cargo:
        <textarea 
          name="Cargo" 
          cols="30" 
          rows="1"
          placeholder='Escreva aqui.'
          maxLength={40}
          value={value}
          onChange={handleChange}
          required
          onMouseEnter={() => {
            alert('Preencha com cuidado esta informação.');
          }}
        >
        </textarea>
      </label>
    )
  }
}

export default Cargo;