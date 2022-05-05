import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './NavbarItems.style.scss';

function NavbarItems({closeMenu}) {
  return (
    <div className='Navbar_Container' onClick={closeMenu} data-aos="slide-down" data-aos-easing="ease-in-sine"    data-aos-once={true}>
        <p>X</p>
        <HashLink to="/">Home</HashLink>
        <a href="#cases" >USE CASES</a>
        <a href="#Roadmap" >ROADMAP</a>
        <a href="#tokens" >TOKENOMICS</a>
        <a href="#team" >TEAM</a>
    </div>
  )
}

export default NavbarItems

