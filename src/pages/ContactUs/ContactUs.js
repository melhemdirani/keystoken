import React, {useState} from 'react';

import Message from '../../assets/images/dream.jpg';
import './ContactUs.styles.scss';
import Location from '../../assets/images/location.png'
import Phone from '../../assets/images/phone.png'
import Fax from '../../assets/images/fax.png'

const ContactUs = () =>{

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${name}, your message was sent!`)
        setName('');
        setEmail('');
        setLastName('');
        setMessage('');
    }
    return(
        <div className='ContactUs_Container'  id="contact" >
            <div className='sectionTitle' >
                <h1>Have Some Questions For Us?</h1>
                <div className='title_description'>
                    <p className='flex'>
                        <img alt="" src={Location} className='icon' />
                        Sit Nafisa street - Al Tanmia building - 4th Floor Saida - Lebanon
                    </p>
                    <a href='tel:9617724405' className='flex'>
                    <img alt="" src={Phone} className='icon' /> Tel: +961 7 724 405
                    </a>
                    <p className='flex'>
                        <img alt="" src={Location} className='icon' />
                        Fax: +961 7 733 455
                    </p>

                </div>
            </div>
            <div className='ContactForm_Container'>
                <img src={Message} alt="" className='Image'/>
                <div className='Firstcolumn'>
                    <form onSubmit={handleSubmit} className='Form'>
                        <input type="text"  
                            required 
                            name="name"
                            placeholder='Name'
                            value={name}
                            onChange={ (e) => setName(e.target.value) }
                        />
                        <input type="text"  
                            required 
                            name="lastName"
                            placeholder='Last Name'
                            value={lastName}
                            onChange={ (e) => setLastName(e.target.value) }
                        />
                        
                        <input type="email" 
                            required 
                            name="email"
                            placeholder='What is your email?'
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)}
                        />
                        <textarea  
                            name="message"
                            placeholder='Your message...'
                            value={message} 
                            onChange={ (e) => setMessage(e.target.value)}
                        /> 
                        <button type="submit" className='Primary_Button btn-0' >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs