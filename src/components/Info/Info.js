import React, { useEffect, useState } from 'react';

import './Info.style.scss';
const Column = ({text1, text2}) => (
  <div className='Column_Container'>
    <p className='text1'>{text1}</p>
    <p className='text2'>{text2}</p>
  </div>
)


function Info() {
  
  const [stopSpinning, setStopSpinning] = useState(false)

  useEffect(() => {  
    const interval = setInterval(() => { 
      setStopSpinning(true)} , 1000); return () => clearInterval(interval);
    }, []
  );

  const infoData = [
    {title: "STAFF", ammount: "400 employees"},
    {title: "MACHINERY", ammount: "Circa 500 units of light & heavy machinery fleet"},
    {title: "PLANTS", ammount: "3 Ready mix concrete plants, 2 Quarry crushers, Sand making and washing, Asphalt batching, Precast factory"},
    {title: "FACILITIES", ammount: "Mechanical & Electrical workshop, Metal workshop, 13 warehouses, 9 office facilities"}
  ]

  return (
    <div className='Info_Container' id='tokens'>
      <div className='row1'>
        {
          stopSpinning 
          ? infoData.map((data, i) => <Column key={i} text1={data.title} text2={data.ammount} />)
          : infoData.map((data, i) => <div className='spinner' key={i}/>)
        }  
      </div>
    </div>
  )
}

export default Info