import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

import useWindowDimensions from '../useWindowDimensions';
import './ProjectCard.style.scss';
import dream from '../../assets/images/dream.jpg'


function ProjectCard({images, title, id}) {
    useEffect(()=>{
        Aos.init({ 
            duration: 500,
            disable: 'mobile'
        })
    }, [])
    const { width } = useWindowDimensions();
    useEffect(() => {
        if(!showText && width <821){
            setShowText(true)
        }
    }, [width])
    const [ showText, setShowText] = useState(false)
    const Show = () => {
        if(!showText){
            setShowText(true)
        }
    }
    const Hide = () => {
        if(showText && width > 820){
            setShowText(false)
        }
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
            showText  && 
            <div
            style={ 
                showText 
                ? {
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9))`,
                    width: "90%",
                    height: "90%",
                } 
                : null
            }  
            >
                <h4 
                 data-aos={ width > 821 && "slide-down" }
                 data-aos-easing="ease-in-sine" 
                 data-aos-once={true}
                >
                    {title}
                </h4>
                <HashLink 
                 data-aos={ width > 821 && "slide-up" }
                 data-aos-easing="ease-in-sine" 
                 data-aos-mirror={true}
                 data-aos-delay="300" 
                 to={`/projects/${id}`}  
                 className='Tertiary_Button btn-1'
                >
                    View Project 
                </HashLink>
            </div>
        }
    </div>
  )
}

export default ProjectCard