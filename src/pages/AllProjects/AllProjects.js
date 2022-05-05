import React from 'react';
import { HashLink } from 'react-router-hash-link';

import ProjectSection from '../../components/ProjectSection/ProjectSection';
import './AllProjects.styles.scss';

function AllProjects() {
  return (
    <div className='AllProjects_Container'>
      <div className='header'>
        <div className='link'>
          <HashLink to="/">
            Home {">"} 
          </HashLink>
          <p>Projects</p>
        </div>
        <h1>Projects</h1>
      </div>
      <ProjectSection />
    </div>
  )
}

export default AllProjects