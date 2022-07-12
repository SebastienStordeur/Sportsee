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
  return (
    <div className="daily">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          width={500}
          height={300}
          >

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity