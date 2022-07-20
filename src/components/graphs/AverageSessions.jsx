import React from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import classes from './CustomTooltip.module.css';

const AverageSessions = ({data}) => {

  const CustomTooltip = ({ active, payload }) => {
    if(active && payload && payload.length) {
      return (
        <div className={classes.customtooltip}>
          <p>{payload[0].value} min</p>
        </div>
      )
    }
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="day"/>
      <YAxis />
      <Tooltip content={<CustomTooltip/>}/>
      {/* <Legend /> */}
      <Line type="monotone" dataKey="sessionLength" unit="kgs" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default AverageSessions