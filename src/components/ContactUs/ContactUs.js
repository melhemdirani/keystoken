import React, {useState} from 'react';

import Message from '../../assets/images/dream.jpg';
import './ContactUs.styles.scss';
import Location from '../../assets/images/location.png'
import Phone from '../../assets/images/phone.png'

const ContactUs = () =>{

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [styling, setStyling] = useState("")
    const [styling2, setStyling2] = useState("")
    const [styling3, setStyling3] = useState("")

    const handleChange = () => {
    }
    const handleChange2 = () => {
    }
    const handleChange3 = () => {
    }
    const resetBorder = () =>{
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    }
    return(
        <div className='ContactUs_Container'  id="contact" >
            <div className='sectionTitle' >
                <h1>Have Some Questions For Us?</h1>
                <div className='title_description'>
                    <img alt="" src={Location} className='icon' />
                    Tyre, South Lebanon
                    <img alt="" src={Phone} className='icon' />
                    <a>
                        +961 111 111
                    </a>
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