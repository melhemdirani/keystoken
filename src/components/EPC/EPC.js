import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player/lazy'


import Epc from '../../assets/images/epc.mp4'
import './EPC.styles.scss';


function EPC() {

  return (
    <div className='EPC_Container'>
        <ReactPlayer url={Epc} playing={true} muted={true}/>
    </div>
  )
}

export default EPC