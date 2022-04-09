import React from "react";

class Cidade extends React.Component{
  render() {
    const { value, handleChange, validateCity } = this.props;
    return (
      <label>
        Cidade:
        <input 
          type="text"
          name="Cidade"
          maxLength={28}
          value={value}
          onChange={handleChange}
          onBlur={validateCity}
          required
        />
      </label>
    )
  }
}

export default Cidade;