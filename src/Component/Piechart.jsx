import React from "react";
import { PieChart, Pie, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, BarChart } from "recharts";


function Piechart() {
  const data = [
    { name: "Pelu code", value: 1 },
    { name: "Tola need", value: 2 },
    { name: "Fiver", value: 3 },
    { name: "Ify money", value: 4 },
    { name: "Nonso baller", value: 5 }
  ]


  return (
    <div className="mt-8">
      <h1></h1>
      <BarChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>

        
          <div>
          <PieChart width={900} height={950}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#16DA70"
          background="#0000"
          label
        />
        <Tooltip />
      </PieChart>
          </div>
      

    </div>
  );
}

export default Piechart
