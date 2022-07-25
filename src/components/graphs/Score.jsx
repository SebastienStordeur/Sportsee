import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const Score = () => {

  const data = [
    { name: 'Group A', value: 30 },
    { name: 'Group B', value: 70 },

  ];

  const COLORS = ['#FF0000', '#FFF'];
  return (
    <PieChart width={800} height={400}>
    <Pie
      data={data}
      cx={110}
      cy={100}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={0}
      dataKey="value"
      startAngle={-270}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  )
}

export default Score