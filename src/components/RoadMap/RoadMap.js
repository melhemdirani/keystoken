import React, { useEffect } from 'react';
import Aos from 'aos';

import './RoadMap.style.scss';
import RoadMapCard from '../RoadMapCard/RoadMapCard';
import Staff from '../../assets/images/staff.svg';
import Machine from '../../assets/images/machine.svg';
import Plant from '../../assets/images/plant.svg';
import Crusher from '../../assets/images/crusher.svg';
import Asphalt from '../../assets/images/asphalt.svg';
import Workshop from '../../assets/images/workshop.svg';
import Accommodation from '../../assets/images/accommodation.svg';
import Sand from '../../assets/images/sand.svg';
import Brick from '../../assets/images/brick.svg';
import Warehouse from '../../assets/images/warehouse.svg';
import Offices from '../../assets/images/office.svg';

function RoadMap() {

  useEffect(()=>{
    Aos.init({ duration: 500 })
  }, [])

  const texts = [
    {
      title:"Concrete Plants",
      text: "3 Ready mix concrete production plants",
      image: Plant

    },
    {
      title:"Quarry Crushers", 
      text: "2 quarry crushers",
      image: Crusher
    },
    {
      title:"Asphalt Plant",
      text: "Asphalt batching plant",
      image: Asphalt
    },
    {
      title:"Sand Plant",
      text: "Sand making & washing plant",
      image: Sand
    },
    {
      title:"Brick Plant",
      text: "Precast concrete bricks plant",
      image: Brick
    },
  ]
  return (
    <div className='RoadMap_Container' id='business verticals'>
      <h2>Business Verticals</h2>
      <div className='cards_container'>
        {
          texts && texts.map((item, i) => 
            <RoadMapCard gray={2} title={item.title} text={item.text} image={item.image} key={i} i={i}/>
          )
        }
      </div>
       
    </div>
  )
}

export default RoadMap