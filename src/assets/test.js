import React, { useState, useEffect } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectSection.style.scss'
import AnimatedDescription from '../AnimatedDescription/AnimatedDescription';
import { SortedProjects } from '../../assets/SortedProjects';

function ProjectSection() {

  const [projectFilter, setProjectFilter] = useState("All")
  const [stopSpinning, setStopSpinning] = useState(false)

  useEffect(() => {  
    const interval = setInterval(() => { 
      setStopSpinning(true)} , 1000); return () => clearInterval(interval);
    }, [projectFilter]
  );

  const handleChange = (e) => {
    setProjectFilter(e.target.value)
    setStopSpinning(false)
  }


  return (
    <div className='ProjectSection_Container' id='team'>
      <div className='row1'>
        <AnimatedDescription title="Our Projects" description="Since its foundation, DANASH has executed a large number of EPC projects. Here is an overview of the company’s executed projects."/>
        <select value={projectFilter} onChange={handleChange}  >
          <option value="All">All Projects</option>
          <option value="Roads">Roads Projects</option>
          <option value="Buildings">Buildings Projects</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Marine">Marine</option>
          <option value="Lakes">Lakes</option>
          <option value="Operation and Maintenance">Operation and Maintenance</option>
        </select>
      </div>

      {
        stopSpinning ? 
        <div className='Projects_Container'>
          {
            SortedProjects && SortedProjects.map((project, i) =>{ 
              let images = project.images ? project.images : null
              let type = Object.keys(project)[0]
              let title = project.Column2
              return type === projectFilter||  projectFilter === "All" ? (
                <ProjectCard 
                  images={images} 
                  key={i}
                  title={title}
                  id={i}
                />
              )
              : null
            })
       
          }
        </div>
        :  <div className='spinner'/>
      }
     
    </div>
  )
   
}

export default ProjectSection