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
      title: "Staff",
      text: "DANASH employs about 400 staff between management, engineers, general services, foremen, technicians and general labor",
      image: Staff
    },
    {
      title: "Machinery",
      text: "DANASH owns a large number (circa 400 units) of light & heavy machinery fleet related to its business scope",
      image: Machine
    },
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
      text: "Asphalt production plant",
      image: Asphalt
    },
    {
      title:"Workshops",
      text: "Mechanical and electrical workshop, welding & coating center, and a machinery refurbishment yard",
      image: Workshop
    },
    {
      title:"Staff Accomodation Modules",
      text: "300 staff accommodation modules available for relocation at short notice",
      image: Accommodation
    },
    {
      title:"Sand Plant",
      text: "Sand making and washing plant",
      image: Sand
    },
    {
      title:"Brick Plant",
      text: "Precast concrete bricks plant",
      image: Brick
    },
    {
      title:"Warehouses",
      text: "13 warehouses distributed across the country used as logistics bases and storages",
      image: Warehouse
    },
    {
      title:"Offices",
      text: "9 offices facilities located in the main cazas across the country",
      image: Offices
    },
  ]
  return (
    <div className='RoadMap_Container' id='business verticals'>
        {
          texts && texts.map((item, i) => 
            <RoadMapCard gray={2} title={item.title} text={item.text} image={item.image} key={i}/>
          )
        }
    </div>
  )
}

export default RoadMap