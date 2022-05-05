import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

import './AnimatedDescription.style.scss';

export default function AnimatedDescription({title, Span, description, Button}) {
  useEffect(()=>{
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='AnimatedDescription_Container'>
        <h2 data-aos="slide-right" data-aos-easing="ease-in-sine"    data-aos-once={true}>
            {title}
            <span> {Span}</span>
        </h2>
        <div data-aos="slide-left" data-aos-easing="ease-in-sine"    data-aos-once={true}>
            <p>{description}</p>
            { Button && <button className='Primary_Button'>{Button}</button> }
        </div>
    </div>
  )
}
