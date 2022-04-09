import React from "react";

class Cpf extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Cpf:  
        <input 
          type="text"
          name="Cpf"
          maxLength={11}
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    )
  }
}

export default Cpf;