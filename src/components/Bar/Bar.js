import React from 'react'
import './Bar.style.scss'

export default function Bar({percentage}) {
    let m = 35 * percentage / 100
  return (
    <div className='Bar_Container'>
        <div style={{width: `${m}vw`}}><p>{percentage}%</p></div>
    </div>
  )
}
