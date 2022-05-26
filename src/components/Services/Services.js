import React from 'react';

import Cdr from '../../assets/images/gover3.png';
import Water from '../../assets/images/water.png';
import Transport from '../../assets/images/gover7.png';
import AnimatedDescription from '../AnimatedDescription/AnimatedDescription';
import './Services.styles.scss';


const ServiceCard = ({title, image, text}) => {
    return(
        <div className='ServiceCard_Container'>
            <img alt="" src={image} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

function Services() {
    let services =[
        {
            image: Cdr,
            title: "Council for Development & Construction",
            text: "Execution of Over 20 million USD Roads, Buildings and Civil projects ",
        },
        {
            image: Transport,
            title: "Ministry of Public works & Transportation", 
            text: "First degree for Roads and Buildings projects"
        }, 
        {
            image: Water,
            title: "Ministry of Energy & Water", 
            text: "First degree for water projects"
        }, 
    ]
  return (
    <div className='Services_Container'  id='classifications'>
        <h2>Classifications</h2>
        <div className='row2'>
            {
                services && services.map((service, i) =>
                    <ServiceCard image={service.image} title={service.title} text={service.text} key={i} />
                )
            }
        </div>
        
    </div>
  )
}

export default Services