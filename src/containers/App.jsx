import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />

    <Categories>
      <Carousel>
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
      <Carousel>
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
      <Carousel>
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
