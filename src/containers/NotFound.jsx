import React from 'react';
import notFoundImage from '../assets/images/not-found.png';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className='not-found'>
    <img src={notFoundImage} alt='not-found' />
  </div>
);

export default NotFound;

