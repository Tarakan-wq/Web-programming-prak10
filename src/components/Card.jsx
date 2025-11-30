import React from 'react'

const periodPrevLabel = {
  daily: 'Yesterday',
  weekly: 'Last Week'
}

export default function Card({ item, period }) {
  const timeframe = (item.timeframes && item.timeframes[period]) || { current: 0, previous: 0 }
  const prevLabel = periodPrevLabel[period] || 'Previous'

  // create a safe class name from title, e.g. "Self Care" -> "self-care"
  const cls = 'card card--' + item.title.toLowerCase().replace(/\s+/g, '-')

  return (
    <article className={cls}>
      <div className="card-top" aria-hidden="true" />
      <div className="card-inner">
        <header className="card-header">
          <h3 className="card-title">{item.title}</h3>
          <button className="ellipsis" aria-label="options">•••</button>
        </header>

        <div className="card-body">
          <div className="current">{timeframe.current}hrs</div>
          <div className="previous">{prevLabel} - {timeframe.previous}hrs</div>
        </div>
      </div>
    </article>
  )
}
