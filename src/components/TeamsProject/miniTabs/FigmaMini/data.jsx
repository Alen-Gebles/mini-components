import React from 'react'
import './figmaMini.css'

export default function FigmaMini({ activeTab }) {
  return (
    <div className={`miniTabBox ${activeTab === 'Figma' ? 'tabBtnActive' : 'tabBtnNotActive'}`}>FigmaMini</div>
  )
}
