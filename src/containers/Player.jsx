import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions/index';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);
  console.log(props.playing)
  const hasPlaying = Object.keys(props.playing).length > 0;

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay muted>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>regresar</button>
      </div>
    </div>
  ) :
    <NotFound /> ;
};

const mapStateToProps = (state) => {
  console.log(state.playing);
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
