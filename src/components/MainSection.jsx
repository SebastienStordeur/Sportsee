import React, { useEffect, useState } from 'react'
import Performances from './Performances';
import { useParams } from "react-router-dom";

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";
import { getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/APICall';



const MainSection = ({user, performance, averageSessions, activity}) => {
  const { id } = useParams()


  return (
    <section className="main-section">
        <Greetings user={user}/>
        <div className="content">
            <div className="graph-grid">
                <DailyActivity />
                <Graphs />
                <Graphs data={performance}/>
                <Graphs/>
            </div>
            <div className="user-nutriments">
               
                <CaloriesBlock />
                <CaloriesBlock/>
                <CaloriesBlock/>
            </div>
        </div>
    </section>
  )
}

export default MainSection