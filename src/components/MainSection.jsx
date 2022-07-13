import React, { useEffect, useState } from 'react'
import Performances from './Performances';
import { useParams } from "react-router-dom";

import { Greetings, Graphs, CaloriesBlock, DailyActivity } from "../components";
import { getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/APICall';



const MainSection = () => {
  const { id } = useParams()

/*   const [user, setUser] = useState({
    infos: null,
    performance: null,
  }); */

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  
  useEffect(() => {
    getUserInfos(id, setUser);
    getUserActivity(id, setActivity);
    getUserAverageSessions(id, setAverageSessions);
    getUserPerformance(id, setPerformance);

    console.log(performance)
    console.log("User", user)
  }, [id])

  return (
    <section className="main-section">
        <Greetings user={user} />
        <div className="content">
            <div className="graph-grid">
                <DailyActivity />
                <Graphs data={performance}/>
                <Graphs/>
                <Graphs/>
            </div>
            <div className="user-nutriments">
                {/* <CaloriesBlock data={user.keyData.calorieCount}/> */}
                <CaloriesBlock/>
                <CaloriesBlock/>
                <CaloriesBlock/>
            </div>
        </div>
    </section>
  )
}

export default MainSection