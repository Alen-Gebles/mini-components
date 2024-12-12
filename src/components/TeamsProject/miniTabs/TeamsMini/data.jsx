import React from 'react'
import './teamsMini.css'

export default function TeamsMini({ activeTab }) {
  return (
    <div className={`miniTabBox miniTeamTabBox ${activeTab === 'Teams' ? 'tabBtnActive' : 'tabBtnNotActive'}`}>

      <div className='miniRow'>
        <div className='teamMiniRow_left'>
          <p>Evelyn Harper</p>
          <p>Pecs, Hungary</p>
        </div>

        <div className='teamMiniRow_right'>
          <p>08:30 AM</p>
        </div>
      </div>

      <div className='miniRow'>
        <div className='teamMiniRow_left'>
          <p>Clara Rossi</p>
          <p>Matera, Italy</p>
        </div>

        <div className='teamMiniRow_right'>
        <p>5:30 PM</p>
        </div>
      </div>

      <div className='miniRow'>
        <div className='teamMiniRow_left'>
          <p>Noah Fischer</p>
          <p>Tbilisi, Georgia</p>
        </div>

        <div className='teamMiniRow_right'>
        <p>2:45 PM</p>
        </div>
      </div>

      <div className='miniRow'>
        <div className='teamMiniRow_left'>
          <p>Lucas Schmidt</p>
          <p>Vilnius, Lithuania</p>
        </div>

        <div className='teamMiniRow_right'>
        <p>01:00 PM</p>
        </div>
      </div>

    </div>
  )
}
