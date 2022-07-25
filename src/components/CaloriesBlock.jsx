import React from 'react'
import SportButton from './SportButton'

const CaloriesBlock = (props) => {

  console.log(props)
  /* console.log(userData) */
  return (
    <div className="cal-block">
      {props.data}
     {/*  <SportButton><img src={props.icon} alt='' /></SportButton> */}
    </div>
  )
}

export default CaloriesBlock