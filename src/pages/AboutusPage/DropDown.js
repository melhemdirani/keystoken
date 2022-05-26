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
    }, [show])
    return  (
        <div className='DropDown_Contianer'>
            <h3 
             onClick={handleClick}
            >
                {type} {
                    show 
                    ? <span className='slowRotate2'>{">"}</span> 
                    : <span className='slowRotate1'> {">"} </span>
                }
            </h3>
            { show &&
                <div 
                    className='clients'   
                    data-aos="fade-right" 
                    data-aos-easing="ease-in-sine"     
                >
                    {
                        images && images.map((image, i) => 
                        <div>
                            <img 
                             alt="" 
                             src={image} 
                             key={i} 
                             className='images' 
                             data-aos-once={true} 
                            />
                            <p>{clients && clients[i]}</p>

                        </div>
                       
                        )
                    }
                </div>
            }
        </div>
    );
}
export default DropDown