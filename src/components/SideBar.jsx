import React from 'react'
import SportButton from './SportButton'
import { swim, bike, haltere, meditation } from "../assets";

const SideBar = () => {
  return (
    <div className="side-bar">
        <SportButton icon={meditation}/>
        <SportButton icon={swim}/>
        <SportButton icon={bike}/>
        <SportButton icon={haltere}/>

        <span className="copyright">Copiryght, SportSee 2020</span>
    </div>
  )
}

export default SideBar