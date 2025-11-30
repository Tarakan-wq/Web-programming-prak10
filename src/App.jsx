import React, { useState } from 'react'
import data from '../src/data.json'
import Card from './components/Card.jsx'

const AVATAR_SRC = 'avatar.png' // put your image at public/avatar.png

export default function App() {
  const [period, setPeriod] = useState('daily')

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="profile-card">
          <div className="profile-top">
            <img src={AVATAR_SRC} alt="avatar" className="avatar" />
            <div className="profile-text">
              <div className="report-for">Report for</div>
              <div className="user-name">Taras<br/>Starodubets</div>
            </div>
          </div>

          <div className="periods">
            <button
              className={period === 'daily' ? 'period-btn active' : 'period-btn'}
              onClick={() => setPeriod('daily')}
            >
              Daily
            </button>
            <button
              className={period === 'weekly' ? 'period-btn active' : 'period-btn'}
              onClick={() => setPeriod('weekly')}
            >
              Weekly
            </button>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="grid">
          {data.map((item) => (
            <Card key={item.title} item={item} period={period} />
          ))}
        </div>
      </main>
    </div>
  )
}
