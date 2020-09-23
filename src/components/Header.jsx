import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW3.png';
import user from '../assets/images/user-icon.jpg';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={user} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
