import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const location = useLocation();

  const isNotHome = location.pathname !== '/Home';

  return (
    
    isNotHome && (
      <header className="header">
        <nav>
          <img src='/Assets/pokebola.png' className="pokeball-left" alt="Pokebola esquerda"/>
          <ul className="nav-list">
            <li><Link to="/Home" className="nav-link">Home</Link></li>
            <li><Link to="/Register" className="nav-link">Registro</Link></li>
            <li><Link to="/Search" className="nav-link">Busca</Link></li>
            <li><Link to="/Profile" className="nav-link">Perfil</Link></li>
          </ul>
          <img src='/Assets/pokebola.png' className="pokeball-right" alt="Pokebola direita"/>
        </nav>
      </header>
    )
  );
}

export default Header;
