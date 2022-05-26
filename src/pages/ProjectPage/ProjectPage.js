import React, { useRef, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

import { SortedProjects } from '../../assets/SortedProjects';
import './ProjectPage.styles.scss';
import Right from '../../assets/images/right.svg'
import Left from '../../assets/images/left.svg'

import building from '../../assets/images/building.jpg';
import infrastructure from '../../assets/images/infrastructure.jpg';
import road from '../../assets/images/road.jpg';
import marine from '../../assets/images/marine.jpg';
import lake from '../../assets/images/lake.jpg';
import maintenance from '../../assets/images/maintenance.jpg';

function ProjectPage() {
  const [index, setIndex] = useState(0)

  let parm = useParams()
  let j = parm.projectid
  let project = SortedProjects[j]
  let type = Object.keys(project)[0]
  console.log(type)
  let date = project.Column3
  let date2 = project.Column4
  let title = project.Column2
  let client = project.Column5
  let role = project.Column6
  let text = project.Column7
  let text2 = project.Column8 ? project.Column8 : null
  let text3 = project.Column9 ? project.Column9 : null

  let imageArray = project.images ? project.images 
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
    
  let text4 = text && text.replace(/- /g, "<br /> <li>");
  let text5 = parse("" + text4)

  let text6 = text2 && text2.replace(/- /g, "<br /> <li>");
  let text7 = parse("" + text6)

  let text8 = text3 && text3.replace(/- /g, "<br /> <li>");
  let text9 = parse("" + text8)
  const handleImageClick = (i) => {
    setIndex(i)
  }
  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const alternateImages = () => {
    if (index === imageArray.length -1) {
      setIndex(0)
    }
    else setIndex( index + 1)

  }
 
  useEffect(() => {  
    const interval = setInterval(() => { 
      alternateImages()} , 3000);
      return () => clearInterval(interval);
    }, [index]
  );

  return (
    <div className='ProjectPage_Container' >
      { imageArray && 
        <div className='Images_container'>
          <img alt="" src={imageArray[index]} className="first_image"/>
          <div className='rendered_images'> 
            { imageArray.length > 5 && <button  onClick={() => scroll(-110)}> <img alt="" src={Left} /></button> }
            <div className='Images ' ref={ref}>
              {
                imageArray && imageArray.length > 1 && imageArray.map((image, i) =>
                <div onClick={() => handleImageClick(i)} key={i}>
                  <img alt="" src={image} id={`${i}`} className="image" style={index === i ? {transform: "scale(1.1)"} :  {opacity: .7}}/>
                </div>
                )
              }
            </div> 
            { imageArray.length > 5 && <button  onClick={() => scroll(110)}> <img alt="" src={Right} /></button> }
         </div>
        </div>
      }
      <div className='description'>
        <h1>{title}</h1>
        <p className='type'><span>Type: </span>{type} </p>
        <p><span>Date: </span><span className='date'>{date} {">"} {date2}</span></p>
        <p><span> Client:</span> {client}</p>
        <p><span> Role:</span> {role}</p>
        {text && <p><span>Description:</span>{" "}{text5}</p>}
        {text2 && <p className='p'>{text7}</p> }
        {text3 && <p className='p'>{text9}</p>}
      </div>
   </div>
  )
}

export default ProjectPage
