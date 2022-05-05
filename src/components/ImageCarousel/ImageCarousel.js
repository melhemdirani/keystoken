import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Sky from '../../assets/images/sky.jpg';

const responsive = {
    0: { items: 1 },
    284: { items: 1 },
    504: { items: 2 },
    720: { items: 3 },
    1000: { items: 4 },
    1210: { items: 5 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt="" />,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
    <img src={Sky} onDragStart={handleDragStart} style={{height: "150px"}} alt=""/>,
  ];

function ImageCarousel() {
    return (
        <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" disableButtonsControls={true} infinite={true}   responsive={responsive}/>
    )
}

export default ImageCarousel