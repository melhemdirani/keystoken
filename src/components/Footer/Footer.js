import React from 'react';

import './Footer.style.scss';
import Logo from '../../assets/images/DANASHW.png'
import SocialMediaIcons from '../SocialMediaIcons';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

function Footer() {
    let year = new Date().getFullYear();
    const location = useLocation();
    const path = location.pathname;
  return (
    <div 
        className='Footer_Container'
        style={path === '/video' ? 
        {
            display:'none'
        }
        : null
    }
    >
        <div className='C1'>
            <HashLink to="/#header">
                <img alt="Keys Token" src={Logo} className='logo' />
            </HashLink>
            <p>
                Copyright ©{year}. All rights reserved | Powered By{" "}
            <a 
                href='https://reboost.live/'
                target="_blank" 
                rel="noopener noreferrer">
                    Reboost 
            </a>
            </p>
        </div>
        <div className='C2'>
            <HashLink to='/'>
                Home
            </HashLink>
            <HashLink to='/aboutus'>
                About Us
            </HashLink>
            <HashLink  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })} to='/aboutus#mission'>
               Mission
            </HashLink>
            <HashLink scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })} to='/aboutus#vision'>
               Vision
            </HashLink>
            <HashLink  to='/aboutus#business vertical'>
                Business Vertical
            </HashLink>
            <HashLink to='/projects#header'>
                Projects
            </HashLink>
            <HashLink to='/contact'>
                Contact Us
            </HashLink>
            <SocialMediaIcons />
        </div>
    </div>
  )
}

export default Footer