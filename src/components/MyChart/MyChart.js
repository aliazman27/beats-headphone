import React from "react";
import "./MyChart.css";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  LineChart,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const MyChart = () => {
  return (
    <div className="charts">
      {/* <LineChart data={data} width={600} height={500}>
          
          <Line stroke="#8884d8" dataKey={'investment'}></Line>
          <Line  dataKey={'sell'}></Line>
          <Line stroke="#82ca9d" dataKey={'revenue'}></Line>
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
      </LineChart> */}

      <div className="area-chart">
      <ComposedChart width={600}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>

<CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          {/* <Line type="monotone" dataKey="invest" stroke="#ff7300" /> */}
          <Scatter dataKey="sell" fill="red" />
      </ComposedChart>
      <h3>Composed Chart</h3>
      </div>

      <div className="area-chart">
        <AreaChart
          width={600}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>

        <h3>Area Chart</h3>
      </div>
    </div>
  );
};

export default MyChart;
