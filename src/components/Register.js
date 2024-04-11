import React, { useState } from 'react';
import './Register.css';
import { useUser } from '../UserContext';
import { useEffect } from 'react';
import BackgroundMusic from '..//1-03. Professor Oak.mp3';

const Register = () => {
  const [name, setName] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { setUserData } = useUser();


  const bgCheckboxChange = () => {
    const maleCheckbox = document.querySelector('.checkBoxMale');
    const femaleCheckbox = document.querySelector('.checkBoxFemale');
    const regMainElement = document.querySelector('.regMain');
    
    if (maleCheckbox.checked && femaleCheckbox.checked) {
      regMainElement.classList.remove('femaleBackground', 'maleBackground');
      regMainElement.classList.add('bothGenders');
    } else if (femaleCheckbox.checked) {
      regMainElement.classList.remove('maleBackground', 'bothGenders');
      regMainElement.classList.add('femaleBackground');
    } else if (maleCheckbox.checked) {
      regMainElement.classList.remove('femaleBackground', 'bothGenders');
      regMainElement.classList.add('maleBackground');
    } else {
      regMainElement.classList.remove('femaleBackground', 'maleBackground', 'bothGenders');
    }
  };
  


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData(prevData => ({ ...prevData, name }));
    setShowSuccessMessage(true);
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
    <div className="containerReg">
      <div className="regMain">
        <h1>Digite seu nome, treinador(a):</h1>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit" onClick={handleSubmit}>Registrar</button>
        <div className="sex">
          <input type="checkbox" className="checkBoxMale" name="gender" onChange={bgCheckboxChange} />
          <label htmlFor="checkBoxMale">M</label>
          <input type="checkbox" className="checkBoxFemale" name="gender" onChange={bgCheckboxChange} />
          <label htmlFor="checkBoxFemale">F</label>
        </div>

        {showSuccessMessage && (
          <div className="success-message">Nome de usuário registrado com sucesso!</div>
        )}
      </div>
    </div>
  );
}

export default Register;
