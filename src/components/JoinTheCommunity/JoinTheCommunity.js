import React from 'react';

import './JoinTheCommunity.style.scss';
import image1 from '../../assets/images/community1.png'
import image2 from '../../assets/images/community2.png'
import image3 from '../../assets/images/community3.png'
import image4 from '../../assets/images/community4.png'
import image5 from '../../assets/images/community5.png'
import image6 from '../../assets/images/community6.png'
import key from '../../assets/images/key.png'

function JoinTheCommunity() {
    const images = [image1, image2, image3, image4, image5, image6]
  return (
    <div className='Community_Container'>
        <div className='Row1'>
            <div className='description_Container'>
                <h2>Join the community</h2>
                <p>Our Discord already has over 30,000 members and is growing daily. Join us to get the news early and follow our latest announcements.</p>
                <div>
                    <button>Join Now</button>
                </div>
            </div>
            <img alt="" src={key} className='image' />
        </div>
        <div className='images_Container'>
            {
                images && images.map((image, i) => 
                    <img alt="" src={image} className='images' key={i}/>
                )
            }
        </div>
    </div>
  )
}

export default JoinTheCommunity