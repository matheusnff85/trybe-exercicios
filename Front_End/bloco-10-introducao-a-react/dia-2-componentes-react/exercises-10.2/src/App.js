import './style.css';
import PokeCard from './CreatePokeCard';
import pokemons from './data';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <section class='container'>
        {pokemons.map((poke) => <PokeCard id={poke.id} name={poke.name} type={poke.type} weigth={`${poke.averageWeight.value.toFixed(1)} ${poke.averageWeight.measurementUnit}`} img={poke.image}/>)}
      </section> 
    </main>   
  );
}

export default App;
