import React, { useState, useEffect } from 'react'
import { getUserAverageSessions } from '../../services/APICall'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageSessions = () => {

    const [AverageSessions, setAverageSessions] = useState(null)

    useEffect(() => {
      getUserAverageSessions(18, setAverageSessions, AverageSessions)
      console.log("sessions", AverageSessions)
    }, [])


    const data = [
        {
            day: "1",
            sessionLength: 30,
        },
        {
            day:"2",
            sessionLength: 60,
        },
        {
            day:"3",
            sessionLength: 45,
        },
    ]

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