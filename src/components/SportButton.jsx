import React from 'react'

const SportButton = ({icon}) => {
  return (
    <button className="sport-btn">
        <img src={icon} alt="Activité" className="icon"/>
    </button>
  )
}

export default SportButton