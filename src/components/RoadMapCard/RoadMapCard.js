import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

import './RoadMapCard.style.scss';


function RoadMapCard({image, title, text}) {
  return (
    <div 
      className='RoadMapCard_Container' 
      data-aos="fade-right" 
      data-aos-easing="ease-in-sine"   
      data-aos-once={true}
      >
       { image &&  <img alt='' src={image} style={{width: "80px"}}/>}
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default RoadMapCard