'use client'

import React from 'react'
import './teamsMini.css'
import { useState } from 'react';

export default function TeamsMini({ activeTab }) {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamInfo = [
    { name: 'Evelyn Harper',
      location: 'Pecs, Hungary',
      time: '08:30 AM',
      timezone: '+1H',
      timezoneName: 'CEST'
    },
    { name: 'Clara Rossi',
      location: 'Matera, Italy',
      time: '5:30 PM',
      timezone: '+1H',
      timezoneName: 'CEST'
    },
    { name: 'Noah Fischer',
      location: 'Tbilisi, Georgia',
      time: '2:45 PM',
      timezone: '+4H',
      timezoneName: 'N/A'
    },
    { name: 'Lucas Schmidt',
      location: 'Vilnius, Lithuania',
      time: '01:00 PM',
      timezone: '+2H',
      timezoneName: 'EEST'
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`miniTabBox miniTeamTabBox ${activeTab === 'Teams' ? 'tabBtnActive' : 'tabBtnNotActive'}`}>

      {teamInfo.map((info, index) => (
        <div key={info.name} className='miniRow'>
          <div className='teamMiniRow_left'>
            <p>{info.name}</p>
            <p>{info.location}</p>
          </div>

          <div className='teamMiniRow_right'>
            <p key={info.index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
            {info.time}</p>
          </div>

          <div key={index} className='timezoneHover' style={{opacity: hoveredIndex === index ? 1 : 0, transform: hoveredIndex === index ? 'translateY(0px)' : 'translateY(10px)'}}>
              <p>{info.timezone}</p>
              <p>{info.timezoneName}</p>
          </div>

        </div>
      ))}

    </div>
  )
}
