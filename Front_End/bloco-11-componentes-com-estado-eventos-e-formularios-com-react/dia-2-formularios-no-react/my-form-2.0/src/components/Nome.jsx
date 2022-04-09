import React from "react";

class Nome extends React.Component{
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Nome:
        <input 
          type="text"
          name="Nome"
          maxLength={40}
          value={value.toUpperCase()}
          onChange={handleChange}
          required 
        />
      </label>
    )
  }
}

export default Nome;