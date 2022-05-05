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

function RoadMap() {

  useEffect(()=>{
    Aos.init({ duration: 500 })
  }, [])

  const texts = [
    {
      title: "Staff",
      text: "DANASH employs about 1250 staff between management, engineers, general services, foremen, technicians and general labor.",
      image: Staff
    },
    {
      title: "Machinery",
      text: "DANASH owns a large number (circa 500 units) of light & heavy machinery fleet related to our business scope.",
      image: Machine
    },
    {
      title:"Concrete Plants",
      text: "Two concrete production plants of a total capacity of 120m3/hour",
      image: Plant

    },
    {
      title:"Quarry Crushers", 
      text: "Two quarry crushers & a concrete bricks factory.",
      image: Crusher
    },
    {
      title:"Asphalt Plant",
      text: "Asphalt production plant with a capacity of 120 m3fhour",
      image: Asphalt
    },
    {
      title:"Workshops",
      text: "Mechanical and electrical workshop",
      image: Workshop
    },
    {
      title:"Staff Accomodation Modules",
      text: "300 staff accommodation modules available for relocation at short notice.",
      image: Accommodation
    },
  ]
  return (
    <div className='RoadMap_Container' id='Roadmap'>
        <div className='desc'>
            <h2>KEY FIGURES</h2>
            <p>Please right a short description</p>
        </div>
        <div className='cards'>
          {
            texts && texts.map((item, i) => 
              <RoadMapCard gray={2} title={item.title} text={item.text} image={item.image} key={i}/>
            )
          }
        </div>
       
    </div>
  )
}

export default RoadMap