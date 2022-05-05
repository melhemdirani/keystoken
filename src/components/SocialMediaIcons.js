import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Discord from '../assets/images/discord.svg';
import '../App.style.scss'

export default function SocialMediaIcons() {
  return (
    <div >
        <a 
            href='https://twitter.com/reboostlb' 
            target='_blank'
            rel='noopener noreferrer'
            className='icons icons2'
        >
            <TwitterIcon  fontSize="large"/>
        </a>
        <a 
            href='https://www.instagram.com/reboostlb/' 
            target='_blank'
            rel='noopener noreferrer'
            className='icons icons2' 
        >
            <img alt="" src={Discord}   />

        </a>
        <a 
            href='https://twitter.com/reboostlb' 
            target='_blank'
            rel='noopener noreferrer'
            className='icons icons2'
        >
            <InstagramIcon fontSize="large"/>
        </a>
    </div>
  )
}
