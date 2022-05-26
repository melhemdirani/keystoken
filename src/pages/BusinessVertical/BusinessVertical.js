import React from 'react';
import { HashLink } from 'react-router-hash-link';
import RoadMap from '../../components/RoadMap/RoadMap';

import './BusinessVertical.styles.scss';

function BusinessVertical() {
  return (
    <div className='BusinessVertical_Container'>
        <div className='header'>
            <div className='link'>
            <HashLink to="/">
                Home {">"} 
            </HashLink>
            <p>Projects</p>
            </div>
        </div>
        <RoadMap />
    </div>
  )
}

export default BusinessVertical