import React, { useEffect, useState } from 'react'
import Performances from './graphs/Performances';
import { useParams } from "react-router-dom";

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";
import { getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/APICall';
import AverageSessions from './graphs/AverageSessions'
import Score from './graphs/Score'


const MainSection = ({user, performance, averageSessions, activity}) => {
  const { id } = useParams()


  return (
    <section className="main-section">
        <Greetings user={user}/>
        <div className="content">
            <div className="graph-grid">
                <DailyActivity />
                <Graphs>
                  <AverageSessions data={averageSessions}/>
                </Graphs>
                <Graphs>
                  <Performances data={performance}/>
                </Graphs>
                <Graphs>
                  <Score />
                </Graphs>
            </div>
            <div className="user-nutriments">
                <CaloriesBlock />
                <CaloriesBlock />
                <CaloriesBlock/>
                <CaloriesBlock/>
            </div>
        </div>
    </section>
  )
}

export default MainSection