import React, { useEffect } from 'react';

import './RoadMapCard.style.scss';


function RoadMapCard({image, title, text}) {
  return (
    <div 
      className='RoadMapCard_Container' 
      >
       { image &&  <img alt='' src={image} style={{width: "80px"}}/>}
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default RoadMapCard