import React, { useEffect } from 'react';

import './RoadMapCard.style.scss';


function RoadMapCard({image, title, text, i}) {
  return (
    <div 
      className='RoadMapCard_Container' 
      >
       { image &&  <img alt='' src={image} style={{width: "100px"}}/>}
          <p>{text}</p>
    </div>
  )
}

export default RoadMapCard