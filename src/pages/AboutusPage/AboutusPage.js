import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import 'aos/dist/aos.css';
import Aos from 'aos';

import './AboutusPage.styles.scss';
import construction from '../../assets/images/cover2.png'
import Vision from '../../assets/images/Vision.jpg'
import DropDown from './DropDown';
import { clients } from '../../assets/data';
import RoadMap from '../../components/RoadMap/RoadMap'
import Services from '../../components/Services/Services';

function AboutusPage() {

    useEffect(()=>{
        Aos.init({ duration: 500 })
    }, [])

    return (
    <div className='AboutusPage_Container' >
        <div className='header'>
            <div className='link'>
            <HashLink to="/">
                Home {">"} 
            </HashLink>
            <p>Projects</p>
            </div>
            <h1>About Us</h1>
        </div>
        <div className='row1' id='about'>
            <img alt='' src={construction} className='img' />
            <div className='description reduced'>
                <h2>We Are Danash Contracting</h2>
                <p>Danash Contracting & Trading Co. is a Civil, Mechanical, Electrical & Instrumentation (CMEI) EPC contractor. </p>
                <p>The company, now part of D Holding Group, is originally a family business that was founded in the early 1960s by Mr. Hassan DANASH. </p>
                <p>The company gained its success through extensive experience of more than 60 years securing the trust of the public and private sectors. The expertise and knowledge in the business were broadened, and new talents were brought to widen the perspectives and the capabilities of the company. </p>
                <p>Today DANASH continues its contributions to Lebanon’s ongoing developmental and infrastructural plans, executing major projects as roads, buildings, marine works, water treatment plants, water and sewage networks for towns and cities in various parts of Lebanon.</p>
                <p>Benefiting from the years of experience in various contracting trades, Danash Contracting and Trading Co. has preempted an excellent status among the best contracting companies in Lebanon.</p>
            </div>
        </div>
        <div className='row1 reverse' id='vision'  data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-once={true} data-aos-delay={400}>
            <img alt='' src={Vision} className='img' />
            <div className='description'>
                <h2>VISION</h2>
                <p>Through the years, DANASH distinguished itself between competitors by diversifying its activities in the contracting field. Beside its expertise in infrastructure (roads, buildings, bridges…), DANASH excelled in other types of projects like marine, real estate, industrial and even facilities management domain. </p>
                <p className='special_p'>The company’s philosophy is based on four main points:</p>
                <ul>
                    <li>To become the customer’s preferred choice by attaining excellence in quality and timely completion contracted projects</li>
                    <li>To continually improve the employees’ skills to excel in their tasks</li>
                    <li>To foster a safety culture at ensuring a safe work environment to our employees and subcontractors</li>
                    <li>To contribute to the development of the local community and society at large as part of our corporate social responsibility</li>
                </ul>
            </div>
        </div>
        <div className='description2' id='mission'>
            <h2>Mission</h2>
            <p>Danash works hard every day to expand its skills and expertise to contribute in the development of the nation.</p>
        </div>
        <Services />
        <div className='clients_container' id='clients'>
            <h2>Our Clients</h2>
            <p>Danash works with a large number of nationally & internationally renowned organizations from public and private sectors.</p>
            {
                clients.map((item, i) => 
                <DropDown show={true} type={item.type} images={item.images}  key={i}/>
                )
            }
        </div>
        <div className='curve' />
    </div>
  )
}

export default AboutusPage