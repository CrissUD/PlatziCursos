import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW3.png';
import user from '../assets/images/user-icon.jpg';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={user} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
