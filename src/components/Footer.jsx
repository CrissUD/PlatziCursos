import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {
  const { isFormF } = props;

  const footerClass = classNames('footer', {
    isFormF,
  });

  return (
    <footer className={footerClass}>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    isFormF: state.isFormF,
  };
};

export default connect(mapStateToProps, null)(Footer);
