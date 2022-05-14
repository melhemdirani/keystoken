import React, { useState } from 'react';

import './HomePage.style.scss';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Services from '../../components/Services/Services';
import AboutUs from '../../components/AboutUs/AboutUs';
import Dream from '../../components/Dream/Dream';
import OurProjects from '../../components/OurProjects/OurProjects';


function HomePage() {

  return (
    <div className='HomePage_Container'>
      <Header />
      <Info />
      <AboutUs />
      <Dream />
      <Services />
      <OurProjects />
    </div>
  )
}

export default HomePage