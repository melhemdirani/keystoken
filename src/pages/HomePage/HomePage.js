import React, { useState } from 'react';

import './HomePage.style.scss';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Description from '../../components/Description/Description';
import RoadMap from '../../components/RoadMap/RoadMap';
import Stats from '../../components/Stats/Stats';
import AnimatedDescription from '../../components/AnimatedDescription/AnimatedDescription';
import JoinTheCommunity from '../../components/JoinTheCommunity/JoinTheCommunity';
import Footer from '../../components/Footer/Footer';
import EPC from '../../assets/images/epc.png'
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