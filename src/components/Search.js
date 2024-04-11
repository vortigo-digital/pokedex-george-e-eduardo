import React, { useState } from 'react';
import './Search.css'
import pokemonData from '../pokedex.json';
import { useUser } from '../UserContext';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [result, setResult] = useState(pokemonData)
  const { userData, setUserData } = useUser();

  
  const handlePokemonSelection = (id) => {
    const audio = new Audio('/Assets/pokemon-capture.mp3');
    audio.volume = 0.1;
    setUserData(prevData => ({...prevData, capturedPokemons : [...prevData.capturedPokemons, pokemonData.find(pokemon => (pokemon.id === id))]})); 
    audio.play()
  };

  const handleSearch = () => {
    const filteredPokemons = pokemonData.filter(pokemon =>
      pokemon.name.english.toLowerCase().includes(searchInput.toLowerCase()) ||
      pokemon.type.some(type =>
        type.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setResult(filteredPokemons);
}


  const padStartZero = (number) => {
    const length = 3;
    const numberStrignify = number.toString();
   
    if (numberStrignify.length < length) {
      return "0".repeat(length - numberStrignify.length) + numberStrignify;
    } else {
      return numberStrignify;
    }
  };

  return (
    <div className="srchContainer">
      <div className="background-square">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="button" onClick={handleSearch}>Buscar</button>
      </div>
      <div className="pokemon-list">
        {result.length > 0 && result.map(pokemon => (
          <div key={pokemon.id} className='pokemon-item'>

          <img src={`/pokemonImg/${padStartZero(pokemon.id)}.png`} aria-hidden="true"/>

          <input
                type="checkbox"
                checked={userData.capturedPokemons.some(captured => captured.id === pokemon.id)}
                onChange={() => handlePokemonSelection(pokemon.id)}
              />
              
          <div className="pok-description">
            <div className='pok-name'>{pokemon.name.english}</div>
            <div>Tipo: {pokemon.type.join(', ')}</div>
            <div>HP: {pokemon.base.HP}</div>
            <div>Ataque: {pokemon.base.Attack}</div>
            <div>Defesa: {pokemon.base.Defense}</div>
          </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Search;