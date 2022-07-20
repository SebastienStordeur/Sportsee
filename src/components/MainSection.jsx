import React from 'react'
import Performances from './graphs/Performances';

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";
import AverageSessions from './graphs/AverageSessions'
import Score from './graphs/Score'


const MainSection = ({user, performance, averageSessions, activity}) => {

  console.log("user", user.keyData)


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
{/*               {user.keyData(data => {
                return <CaloriesBlock content={data} />
              })} */}
            </div>
        </div>
    </section>
  )
}

export default MainSection