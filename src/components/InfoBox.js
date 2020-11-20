import React from 'react'
import "./styles.css"

const InfoBox = ({dict}) => {
  const {title, content, color, btnTitle} = dict
  console.log(title)
  return (
    <div className={`info-box-${color}`}>
      <div>
        <h1 className="info-box-title">{title}</h1>
        <div className="info-box-content">{content}</div>
      </div>
      <button className="info-box-btn">{btnTitle}</button>
    </div>
  )
}

export default InfoBox


