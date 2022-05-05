import React from 'react';

import './Stats.style.scss';
import Bar from '../Bar/Bar';


const stats = [
    {percentage: 40, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"}, {percentage: 30, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"},
    {percentage: 60, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"}, {percentage: 90, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"},
    {percentage: 80, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"}, {percentage: 100, title: "Liquidity", subtitle: "200,000,000 KEYS (locked for 4 years)"},
]

function Stats() {
  return (
    <div className='Stats_Container'>
        <h2>Our Tokenomics</h2>
        <p>The KEYS utility token has a total initial supply of 1,000,000,000 KEYS, and features a 3% Marketing and Development fee. Token distribution is as follows:</p>
        <button className='Secondary_Button'>Transfer KEYS</button>
        <div className='gridbox'>
            {
                stats && stats.map((stat, i)=> 
                    <div key={i} className="stat">
                        <h3>{stat.percentage} {stat.title}</h3>
                        <h4>{stat.subtitle}</h4>
                        <Bar percentage={stat.percentage}/>
                    </div>
                )
            }
        </div>

    </div>
  )
}

export default Stats