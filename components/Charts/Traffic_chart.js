import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "Jun",
      uv: 80,
      pv: 150,
    },
    {
      name: "Jul",
      uv: 200,
      pv: 220,
    },
    {
      name: "Aug",
      uv: 300,
      pv: 350,
    },
    {
      name: "Sep",
      uv: 310,
      pv: 280,
    },
    {
      name: "Oct",
      uv: 390,
      pv: 360,
    },
    {
      name: "Nov",
      uv: 400,
      pv: 350,
    },
  ];
export default function Traffic_chart() {
  return (
    <div className="Chart-container">
    <div className="chart-div">
      <h4>Abandoned checkouts</h4>
      <select className="date-select" name="dates" id="dates">
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="day">day</option>
      </select>
      <div style={{ width: '100%', aspectRatio: '3', }}>
    
          <AreaChart
           width={900} height={300} data={data}

          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="08D0C6" fill="rgba(8, 208, 198, 0.82)" />
          </AreaChart>

      </div>
        </div>
        </div>
  )
}
