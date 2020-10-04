import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    { children }
    <Footer />
  </div>
);

export default Layout;
