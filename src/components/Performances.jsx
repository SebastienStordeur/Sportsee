import React, { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../services/APICall';

const Performances = () => {

  const [performance, setPerformance] = useState(null)

  useEffect(() => {
    getUserPerformance(18, setPerformance, performance)
    console.log("perf", performance)
  }, [])
    
  return (
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
  )
}

export default Performances