import React from 'react'
import './slackMini.css'

export default function SlackMini({ activeTab }) {
  return (
    <div className={`miniTabBox ${activeTab === 'Slack' ? 'tabBtnActive' : 'tabBtnNotActive'}`}>SlackMini</div>
  )
}
