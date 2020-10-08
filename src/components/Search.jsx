import React from 'react';
import '../assets/styles/components/Search.scss';

const titleSearch = '¿Que quieres ver hoy?';

const Search = () => (

  <section className='main'>
    <h2 className='main__title'>{ titleSearch }</h2>
    <input type='text' className='input input--main' placeholder='Buscar...' />
  </section>
);
export default Search;
