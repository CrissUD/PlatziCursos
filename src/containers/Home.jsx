import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import '../assets/styles/App.scss';

const Home = ({ categories }) => {
  const nameList = Object.keys(categories);
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

export default connect(mapStateToProps, null)(Home);
