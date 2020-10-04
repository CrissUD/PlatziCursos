import React from 'react';
import UseInitialState from '../hooks/UseInitialState';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {

  const [videos, categories] = UseInitialState(API);

  return (
    <div className='app'>
      <Search />
      {
        categories.map((category) => (
          videos[category].length > 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {videos[category].map((video) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <Item key={video.id} {...video} />
                ))}
              </Carousel>
            </Categories>
          )
        ))
      }
      {/* {videos.myList.length > 0 && (
        <Categories title='Backend'>
          <Carousel>
            <Item />
          </Carousel>
        </Categories>
      )}

      <Categories title='Frontend'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            videos.trends.map((video) => <Item key={video.id} {...video} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Security'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            videos.originals.map((video) => <Item key={video.id} {...video} />)
          }
        </Carousel>
      </Categories> */}
    </div>
  );
};

export default Home;
