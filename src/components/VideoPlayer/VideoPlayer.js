import React from 'react';
import './VideoPlayer.styles.scss'

import EPC from '../../assets/images/asphaltPlant.mp4';
import ReactPlayer from 'react-player';
import { HashLink } from 'react-router-hash-link';


function VideoPlayer() {
  return (
    <div className='VideoPlayer_Container'>
      <ReactPlayer url={EPC} playing={true} controls={true} volume={1} muted={true} width='100%' height='100%'/>
      <HashLink to='/#header'>
        X
      </HashLink>
    </div>
  )
}

export default VideoPlayer