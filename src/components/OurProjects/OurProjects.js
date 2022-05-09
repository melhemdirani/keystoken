import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './OurProjects.styles.scss';
import { projects } from '../../assets/data';
import ProjectCard from '../ProjectCard/ProjectCard'
import AnimatedDescription from '../AnimatedDescription/AnimatedDescription'


function OurProjects() {

               
  return (
    <div className='OurPorjects_Container'>
      <AnimatedDescription Span="Projects" title="Key" description="DANASH has executed a large number of EPC projects. Here is an overview of some key executed projects" />

      <div className='projects'>
        {
          projects && projects.map((project, i) => {
            return(
              <ProjectCard images={project.images} title={project.Column2} key={i} id={project.id} />
            );
            
          })
        }
      </div>
      <HashLink to="projects" className='Primary_Button btn-0 '>
        View All Projects
      </HashLink>
       
    </div>
  )
}

export default OurProjects