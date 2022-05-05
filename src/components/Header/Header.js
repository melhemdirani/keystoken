import React from 'react';
import Carousel from 'nuka-carousel';

import { featuredImages } from '../../assets/data';

import play from '../../assets/images/play.png';
import Logo2 from '../../assets/images/logomobile.png';
import './Header.style.scss';
import SocialMediaIcons from '../SocialMediaIcons';
import Menu from '../../assets/images/menu.png'

export default function Header() {
 
  return (
    <div className='Header_Container' id='header'>
      <div className='Carousel'>
        <Carousel 
          autoplay={true} 
          autoplayInterval="4000"
          wrapAround = {true} 
          withoutControls
          speed={1000}
          disableAnimation={true}
          animation='fade'
        >
          {
            featuredImages && featuredImages.map((image, i) =>
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .8)),  url(${image})`}} key={i} className="corousel_image">
              <img alt="play" src={play} className="play_img" />
              <div className='Description'>
                <p className='text1'>WELCOME TO </p>
                <h2>Danash Contracting</h2>
                <p className='text2'>Danash Contracting & Trading Co. is a Civil, Mechanical, Electrical & Instrumentation (CMEI) EPC contractor. </p>
              </div>
              
            </div>
            )
          }
        </Carousel>
      </div>
      <div className='row'>
        <div className='pentagon' />
      </div>
 
    </div>
  )
}
