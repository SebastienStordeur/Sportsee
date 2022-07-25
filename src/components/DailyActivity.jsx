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

const DailyActivity = ({data}) => {

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
        <XAxis dataKey="day"/>
        <YAxis orientation='right' scale='auto' />
        <Tooltip content={<CustomTooltip />}/>
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <ReferenceLine y={0} stroke="#DEDEDE" />
        <Bar dataKey="Poids (kg)" fill="#282D30" unit="kg" barSize={7} radius={[3, 3, 0, 0]}/>
        <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" unit="Kcal" barSize={7} radius={[3, 3, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>

  </div>
  )
}

export default DailyActivity