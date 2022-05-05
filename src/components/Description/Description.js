import React from 'react';

import './Description.style.scss';

function Description() {
    let title = "CLASSIFICATIONS"
    let paragraph =[
        {
            title: "Council for Development & Construction",
            text: "Execution of Over 20 million USD Roads, Buildings and Civil projects ",
        },
        {
            title: "Ministry of Public works II Transportation", 
            text: "First degree for Roads and Buildings projects"
        }, 
        {
            title: "Ministry of Energy & Water", 
            text: " First degree for water projects"
        }, 
    ]
       
  return (
    <div className='Description_Container' id='cases'>
        <h2>{title}</h2>
        <div className='body'>
            {
                paragraph && paragraph.map((p,i) => 
                    <div key={i}> 
                        <h3>{p.title} </h3>
                        <p>{p.text}</p>
                        {p.button && <button className='Secondary_Button'>{p.button}</button>}
                    </div>
                )
            }
        </div>     
    </div>
  )
}

export default Description