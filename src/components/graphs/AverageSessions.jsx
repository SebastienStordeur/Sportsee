import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSessions = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default AverageSessions