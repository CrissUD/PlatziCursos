import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { logoutRequest } from '../actions/index';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW3.png';
import userImage from '../assets/images/user-icon.png';

const Header = (props) => {
  const { user, isFormH } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isFormH,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {(hasUser) ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userImage} alt='user' />}
          <p>Perfil</p>
        </div>
        <ul>
          {
            (hasUser) && (
              <li><a href='/'>Cuenta</a></li>
            )
          }
          {
            (hasUser) ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
              <li><Link to='/login'>Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isFormH: state.isFormH,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
