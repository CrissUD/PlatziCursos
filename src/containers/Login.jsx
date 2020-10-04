/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/images/google-icon.png';
import twitter from '../assets/images/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>
          Iniciar sesión
        </button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdate
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={google} alt='' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitter} alt='' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'> Registrarte </Link>
      </p>
    </section>
  </section>
);

export default Login;
