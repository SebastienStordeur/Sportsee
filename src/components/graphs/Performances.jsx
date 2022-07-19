import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Performances = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tick={{fill: 'white'}}/>
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  </ResponsiveContainer>
  )
}

export default Performances;