import React from 'react';
import './Profile.css';
import { useUser } from '../UserContext';
import { useEffect } from 'react';
import BackgroundMusic from '../1-04. Oak Laboratory.mp3';

const Profile = () => {
  const { userData } = useUser();
  const padStartZero = (number) => {
    const length = 3;
    const numberStrignify = number.toString();

    if (numberStrignify.length < length) {
      return "0".repeat(length - numberStrignify.length) + numberStrignify;
    } else {
      return numberStrignify;
    }
  };

  useEffect(() => {
    const backgroundMusic = new Audio(BackgroundMusic);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.1;

    const timeoutId = setTimeout(() => {
      backgroundMusic.play();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      backgroundMusic.pause();
    };
  }, []);

  return (
    <div className='mainProfBox'>
      <h1 className='profileName'>Bem vindo, {userData.name}!</h1>
      <h2>Seus Pokémons:</h2>
      {userData.capturedPokemons.length > 0 ? (
        <ul className="pokemon-list">
          {userData.capturedPokemons.map(pokemon => (
            <li key={pokemon.id} className="pokemon-item-prof">
              <img src={`/pokemonImg/${padStartZero(pokemon.id)}.png`} alt={pokemon.name.english} />
              <div className="pok-description-prof">
                <div className='pok-name-prof'>{pokemon.name.english}</div>
                <div>Tipo: {pokemon.type.join(', ')}</div>
                <div>HP: {pokemon.base.HP}</div>
                <div>Ataque: {pokemon.base.Attack}</div>
                <div>Defesa: {pokemon.base.Defense}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3>Nenhum pokémon capturado ainda! </h3>
      )}
    </div>
  );
}

export default Profile;

