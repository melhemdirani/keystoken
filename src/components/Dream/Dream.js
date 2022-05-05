import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Dream.styles.scss'

function Dream() {
  return (
    <div className='Dream_Container'>
        <h2>BUILD WITH CONFIDENCE</h2>
        <HashLink to='aboutus' className='Primary_Button'>
          Find Out More About Us
        </HashLink>
    </div>
  )
}

export default Dream