import React from 'react';

import './Footer.style.scss';
import Logo from '../../assets/images/DANASHW.png'
import SocialMediaIcons from '../SocialMediaIcons';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    let year = new Date().getFullYear()
  return (
    <div className='Footer_Container'>
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
            <>
                <p>Whitepaper</p>
                <p>KEYS Burn Tracker</p>
                <p>Medium</p>
                <p>Media Centre</p>
                <p>Contract</p>
                <p>TOS</p>
            </>
            <SocialMediaIcons />
        </div>
    </div>
  )
}

export default Footer