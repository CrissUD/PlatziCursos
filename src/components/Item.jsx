import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions/index';
import '../assets/styles/components/Item.scss';
import play from '../assets/images/play-icon.png';
import plus from '../assets/images/plus-icon.png';
import remove from '../assets/images/remove-icon.png';

const Item = (props) => {
  const { id, cover, title, year, contentRating, duration, isFavorite } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (idItem) => {
    props.deleteFavorite(idItem);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={play}
              alt='Play Icon'
            />
          </Link>
          {(!isFavorite) ?
            (
              <img
                onClick={handleSetFavorite}
                className='carousel-item__details--img'
                src={plus}
                alt='Plus Icon'
              />
            ) :
            (
              <img
                onClick={() => handleDeleteFavorite(id)}
                className='carousel-item__details--img'
                src={remove}
                alt='Remove Icon'
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Item);
