import React from 'react';

class PokeCard extends React.Component {
  render() {
    return (
      <div className='Poke'>
        <div className='Infos'>
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>{`Avarage weight: ${this.props.weigth}`}</p>
        </div>
        <img src={this.props.img} alt="poke current img" className='Poke-Image' />
      </div>
    )
  }
}

export default PokeCard;