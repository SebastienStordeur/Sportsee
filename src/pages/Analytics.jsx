import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { NavBar, SideBar, MainSection } from "../components"; 

import { getUserInfos, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/APICall';

const Analytics = () => {

  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  
  useEffect(() => {
    getUserInfos(id, setUser);
    getUserActivity(id, setActivity);
    getUserAverageSessions(id, setAverageSessions);
    getUserPerformance(id, setPerformance);
  }, [id])



  console.log(user)

  return (
    <main id="main">
      <NavBar />
      <SideBar />
      <MainSection 
        performance={performance} 
        user={user}
        activity={activity}
        averageSessions={averageSessions}
      />
    </main>
  )
}

export default Analytics