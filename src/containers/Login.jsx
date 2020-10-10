/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest, setHeader, setFooter } from '../actions/index';
import google from '../assets/images/google-icon.png';
import twitter from '../assets/images/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  useLayoutEffect(() => {
    props.setHeader(true);
    props.setFooter(true);
  }, []);

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input inpL'
            name='email'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            className='input inpL'
            name='password'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>
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
};

const mapDispatchToProps = {
  loginRequest,
  setHeader,
  setFooter,
};

export default connect(null, mapDispatchToProps)(Login);
