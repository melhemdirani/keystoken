import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const DropDown = ({ type, clients, images}) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    useEffect(()=>{
        Aos.init({ duration: 400 })
    }, [])
    return  (
        <div className='DropDown_Contianer'>
            <h3 onClick={handleClick}>{type} {show ? <span className='slowRotate2'>{">"}</span> : <span className='slowRotate1'> {">"} </span>}</h3>
            <div className='clients'  >
                {
                    show && clients && clients.map((client, i) => 
                    <p key={i}>{client}</p>
                    )
                }
                {
                    show && images && images.map((image, i) => 
                    <img alt="" src={image} key={i} className='images' data-aos="fade-right" data-aos-easing="ease-in-sine"    data-aos-once={true} />
                    )
                }
            </div>
           
        </div>
    );
}
export default DropDown