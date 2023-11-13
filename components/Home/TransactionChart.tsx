"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    Cornestone: 3000,
    Canada: 2400,
    Fraser: 2000,
    Sportt: 1800,
    Metropolitan: 1500,
    amt: 2400,
  },
  {
    name: "February",
    Cornestone: 3200,
    Canada: 2700,
    Fraser: 2136,
    Sportt: 1967,
    Metropolitan: 1866,
    amt: 2210,
  },
  {
    name: "March",
    Cornestone: 3500,
    Canada: 3000,
    Fraser: 2578,
    Sportt: 2216,
    Metropolitan: 2200,
    amt: 2290,
  },
  {
    name: "April",
    Cornestone: 4187,
    Canada: 3214,
    Fraser: 2789,
    Sportt: 2596,
    Metropolitan: 2456,
    amt: 2000,
  },
  {
    name: "May",
    Cornestone: 4953,
    Canada: 3578,
    Fraser: 3136,
    Sportt: 2836,
    Metropolitan: 2789,
    amt: 2181,
  },
  {
    name: "July",
    Cornestone: 6215,
    Canada: 4500,
    Fraser: 4136,
    Sportt: 3819,
    Metropolitan: 3472,
    amt: 2500,
  },
  {
    name: "August",
    Cornestone: 8400,
    Canada: 7416,
    Fraser: 6978,
    Sportt: 5100,
    Metropolitan: 3600,
    amt: 2100,
  },
  {
    name: "September",
    Cornestone: 8900,
    Canada: 7917,
    Fraser: 7255,
    Sportt: 5505,
    Metropolitan: 4130,
    amt: 2100,
  },
  {
    name: "October",
    Cornestone: 2641,
    Canada: 1400,
    Fraser: 1496,
    Sportt: 1236,
    Metropolitan: 951,
    amt: 2100,
  },
  {
    name: "November",
    Cornestone: 5678,
    Canada: 4300,
    Fraser: 5000,
    Sportt: 3500,
    Metropolitan: 2200,
    amt: 2100,
  },
  {
    name: "December",
    Cornestone: 3490,
    Canada: 4300,
    Fraser: 5000,
    Sportt: 3500,
    Metropolitan: 2200,
    amt: 2100,
  },
];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-semibold">
        Độ thu hút các trường qua từng tháng
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cornestone" stackId="a" fill="#253C8A" />
            <Bar dataKey="Metropolitan" stackId="a" fill="#013334" />
            <Bar dataKey="Fraser" stackId="a" fill="#99CA3B" />
            <Bar dataKey="Sportt" stackId="a" fill="#29C4F4" />
            <Bar dataKey="Canada" stackId="a" fill="#D12030" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
