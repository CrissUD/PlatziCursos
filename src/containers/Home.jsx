import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { setHeader, setFooter } from '../actions/index';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import '../assets/styles/App.scss';

const Home = ({ categories, setHeader, setFooter }) => {
  const nameList = Object.keys(categories);

  useLayoutEffect(() => {
    setHeader(false);
    setFooter(false);
  }, []);

  return (
    <div className='app'>
      <Search />
      {
        nameList.map((category) => (
          categories[category].length > 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {categories[category].map((video) => (
                  (category === 'myList') ?
                  // eslint-disable-next-line react/jsx-props-no-spreading
                    (<Item key={video.id} {...video} isFavorite />) :
                  // eslint-disable-next-line react/jsx-props-no-spreading
                    (<Item key={video.id} {...video} />)
                ))}
              </Carousel>
            </Categories>
          )
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = {
  setHeader,
  setFooter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
