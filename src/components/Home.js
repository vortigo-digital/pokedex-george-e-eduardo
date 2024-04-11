import React from 'react';
import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import './Home.css';
import BackgroundMusic from '../1-. Theme Of Pallet Town.mp3'; 

const Home = () => {

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
    <div className='homeMain'>
      <h1>Bem Vindo(a)!</h1>
      <Link to="/Register">
        <button>Acessar</button>
      </Link>
    </div>
  );
}

export default Home;
