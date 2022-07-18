import React from 'react'
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/* https://recharts.org/en-US/examples/BrushBarChart */

const DailyActivity = () => {

  const data = [
    { name: '1', uv: 300, pv: 456 },
    { name: '2', uv: 145, pv: 230 },
    { name: '3', uv: 100, pv: 345 },
    { name: '4', uv: 8, pv: 450 },
    { name: '5', uv: 100, pv: 321 },
    { name: '6', uv: 9, pv: 235 },
    { name: '7', uv: 53, pv: 267 },
    { name: '8', uv: 252, pv: -378 },
    { name: '9', uv: 79, pv: 210 },
    { name: '10', uv: 294, pv: 23 },
  ]



  return (
    <div className='daily'>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey='uv'/>
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Poids (kg)" fill="#282D30" />
      <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" />
    </BarChart>
  </ResponsiveContainer>
  </div>
  )
}

export default DailyActivity