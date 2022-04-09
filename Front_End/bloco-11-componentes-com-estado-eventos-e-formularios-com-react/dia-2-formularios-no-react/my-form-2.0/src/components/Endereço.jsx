import React from "react";

class Endereço extends React.Component{
  render() {
    const { value, validateAdress } = this.props;
    return (
      <label>
        Endereço:
        <input 
          type="text"
          name="Endereço"
          maxLength={200}
          value={value}
          onChange={validateAdress}
          required
        />
      </label>
    )
  }
}

export default Endereço;