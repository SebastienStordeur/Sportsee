import React from 'react'

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";

const MainSection = () => {
  return (
    <section className="main-section">
        <Greetings />
        <div className="content">
            <div className="graph-grid">
                <DailyActivity />
                <Graphs/>
                <Graphs/>
                <Graphs/>
            </div>
            <div className="user-nutriments">                
                <CaloriesBlock/>
                <CaloriesBlock/>
                <CaloriesBlock/>
                <CaloriesBlock/>
            </div>
        </div>
    </section>
  )
}

export default MainSection