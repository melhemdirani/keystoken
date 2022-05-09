import React from 'react';

import './AboutUs.styles.scss';
import construction from '../../assets/images/construction.jpg'
import EPC from '../../assets/images/epc.png'
import { HashLink } from 'react-router-hash-link';

function AboutUs() {
  return (
    <div className='AboutUs_Container'>
      <div className='row1'>
        <img alt='' src={construction} className='img' />
        <div className='background' />
      </div>
      <div className='description'>
        <h2>We Are Danash Contracting and Trading company</h2>
        <p>The company, now part of D Holding Group, is originally a family business that was founded in the early 1960s by Mr. Hassan DANASH. </p>
        <p>The company gained its success through extensive experience of more than 60 years securing the trust of the public and private sectors. The expertise and knowledge in the business were broadened, and new talents were brought to widen the perspectives and the capabilities of the company. </p>
        <p>Today DANASH continues its contributions to Lebanon’s ongoing developmental and infrastructural plans, executing major projects as roads, buildings, marine works, water treatment plants, water and sewage networks for towns and cities in various parts of Lebanon.</p>
        <p>Benefiting from the years of experience in various contracting trades, Danash Contracting and Trading Co. has preempted an excellent status among the best contracting companies in Lebanon.</p>
        <HashLink to='/aboutus' className='btn-0 Primary_button'>
          Learn More
        </HashLink>
      </div>
        
    </div>
  )
}

export default AboutUs