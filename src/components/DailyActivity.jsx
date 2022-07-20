import React from 'react'
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import classes from './graphs/CustomTooltip.module.css';

/* https://recharts.org/en-US/examples/BrushBarChart */

const DailyActivity = () => {

  const data = [
    { name: '1', "Poids (kg)": 300, "Calories brûlées (kCal)": 456 },
    { name: '2', "Poids (kg)": 145, "Calories brûlées (kCal)": 230 },
    { name: '3', "Poids (kg)": 100, "Calories brûlées (kCal)": 345 },
    { name: '4', "Poids (kg)": 8, "Calories brûlées (kCal)": 450 },

  ]

  const CustomTooltip = ({ active, payload }) => {
    if(active && payload && payload.length) {
      return (
        <div className={classes.dailytooltip}>
          {payload.map(load => {
            return <p key={Math.random().toString()}>{load.value + load.unit}</p>
          })}
        </div>
      )
    }
    return null;
  }

  return (
    <div className='daily'>
      <ResponsiveContainer>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />}/>
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Poids (kg)" fill="#282D30" unit="kg" />
      <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" unit="Kcal" />
    </BarChart>
    </ResponsiveContainer>

  </div>
  )
}

export default DailyActivity