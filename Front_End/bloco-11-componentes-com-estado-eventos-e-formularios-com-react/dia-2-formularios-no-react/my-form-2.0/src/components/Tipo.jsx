import React from "react";

class Tipo extends React.Component{
  render() {
    const { handleChange } = this.props;
     return (
      <div>
        <label>
          <input type="radio" name="Tipo" value='Casa' onChange={handleChange}/>Casa
        </label>
        <label >
          <input type="radio" name="Tipo" value='Apartamento' onChange={handleChange}/>Apartamento
        </label>
      </div>
    )
  }
}

export default Tipo;