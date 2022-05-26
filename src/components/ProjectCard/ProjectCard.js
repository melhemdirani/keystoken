import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { HashLink } from 'react-router-hash-link';

import useWindowDimensions from '../useWindowDimensions';
import './ProjectCard.style.scss';

import building from '../../assets/images/building.jpg';
import infrastructure from '../../assets/images/infrastructure.jpg';
import road from '../../assets/images/road.jpg';
import marine from '../../assets/images/marine.jpg';
import lake from '../../assets/images/lake.jpg';
import maintenance from '../../assets/images/maintenance.jpg';


function ProjectCard({images, title, id, date, type}) {
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
    let imageArray = images 
        ? images 
        : type === 'Buildings' 
        ? [building] 
        : type === 'Infrastructure' 
        ? [infrastructure] 
        : type === 'Roads'
        ? [road]
        : type === 'Marine'
        ? [marine]
        : type === 'Lakes'
        ? [lake]
        : [maintenance]
     let Title = title.slice(0, 160)
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
                    {Title}
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