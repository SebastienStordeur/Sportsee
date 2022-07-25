import React from 'react'

const SportButton = (props) => {
  return (
    <button className="btn">
        <img src={props.icon} alt="Activité" className="icon"/>
    </button>
  )
}

export default SportButton