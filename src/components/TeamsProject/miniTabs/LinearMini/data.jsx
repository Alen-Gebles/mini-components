import React from 'react'
import './linearMini.css'

export default function LinearMini({ activeTab }) {
  return (
    <div className={`miniTabBox ${activeTab === 'Linear' ? 'tabBtnActive' : 'tabBtnNotActive'}`}>LinearMini</div>
  )
}
