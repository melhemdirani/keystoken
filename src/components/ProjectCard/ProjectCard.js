import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

import './ProjectCard.style.scss';
import dream from '../../assets/images/dream.jpg'


function ProjectCard({images, title, id}) {
    useEffect(()=>{
        Aos.init({ duration: 500 })
      }, [])
    
    const [ showText, setShowText] = useState(false)
    const Show = () => {
        setShowText(true)
    }
    const Hide = () => {
        setShowText(false)
    }
    
    let imageArray = images ? images : [dream]

    return  (
    <div 
        className='ProjectCard_Container' 
        style={ 
            {
                backgroundImage:`url(${imageArray[0]})`

            }
        } 
        onMouseEnter={Show}
        onMouseLeave={Hide}
    >
        {
            showText && 
            <div
            style={ 
                showText
                ? {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9))`,
                    width: "90%",
                    height: "90%",
                    padding: "20px",
                } 
                : null
            }  
            >

                <h3 data-aos="fade-down" data-aos-easing="ease-in-sine">{title}</h3>
                <HashLink data-aos="slide-up" data-aos-easing="ease-in-sine" data-aos-delay="300" to={`/projects/${id}`}  className='Tertiary_Button btn-1' >
                    View Project 
                </HashLink>
            </div>
        }
    </div>
  )
}

export default ProjectCard