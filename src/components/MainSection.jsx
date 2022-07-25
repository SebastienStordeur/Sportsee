import React from 'react'
import Performances from './graphs/Performances';

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";
import AverageSessions from './graphs/AverageSessions'
import Score from './graphs/Score'


const MainSection = ({user, performance, averageSessions, activity}) => {

  console.log('activity', activity)


  return (
    <section className="main-section">
        <Greetings user={user}/>
        <div className="content">
            <div className="graph-grid">
                <DailyActivity data={activity} />
                <Graphs className='average-graph'>
                  <AverageSessions data={averageSessions}/>
                </Graphs>
                <Graphs>
                  <Performances data={performance}/>
                </Graphs>
                <Graphs className='score-graph'>
                  <Score />
                </Graphs>
            </div>
            <div className="user-nutriments">
              {Object.values(user.keyData).map(data => {
                return <CaloriesBlock data={data} />
              })}
            </div>
        </div>
    </section>
  )
}

export default MainSection