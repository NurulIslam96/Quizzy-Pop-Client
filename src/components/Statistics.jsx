import { Tooltip } from "chart.js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis
} from "recharts";

const Statistics = () => {
  const questionsData = useLoaderData();
  const { data } = questionsData;
  console.log(data);
  return (
    <div className="my-24 container mx-auto flex md:flex-row flex-col justify-between items-center">
        <div>
            <p className="text-3xl font-bold text-slate-500 mb-5 text-center">Statistics of Questions in Different fields</p>
        </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
        
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="name" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
