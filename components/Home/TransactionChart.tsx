"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    Cornestone: 100,
    Canada: 140,
    Fraser: 200,
    Sportt: 180,
    Metropolitan: 150,
    amt: 240,
  },
  {
    name: "February",
    Cornestone: 320,
    Canada: 270,
    Fraser: 213,
    Sportt: 15,
    Metropolitan: 18,
    amt: 66,
  },
  {
    name: "March",
    Cornestone: 88,
    Canada: 265,
    Fraser: 258,
    Sportt: 216,
    Metropolitan: 220,
    amt: 223,
  },
  {
    name: "April",
    Cornestone: 87,
    Canada: 314,
    Fraser: 289,
    Sportt: 26,
    Metropolitan: 456,
    amt: 206,
  },
  {
    name: "Tháng 5",
    Cornestone: 4953,
    Canada: 378,
    Fraser: 316,
    Sportt: 286,
    Metropolitan: 279,
    amt: 281,
  },
  {
    name: "July",
    Cornestone: 65,
    Canada: 450,
    Fraser: 416,
    Sportt: 319,
    Metropolitan: 372,
    amt: 200,
  },
  {
    name: "August",
    Cornestone: 400,
    Canada: 416,
    Fraser: 978,
    Sportt: 100,
    Metropolitan: 600,
    amt: 100,
  },
  {
    name: "September",
    Cornestone: 900,
    Canada: 917,
    Fraser: 255,
    Sportt: 505,
    Metropolitan: 130,
    amt: 100,
  },
  {
    name: "October",
    Cornestone: 641,
    Canada: 1400,
    Fraser: 1496,
    Sportt: 1236,
    Metropolitan: 951,
  },
  {
    name: "Tháng 10",
    Cornestone: 5678,
    Canada: 4300,
    Fraser: 5000,
    Sportt: 3500,
    Metropolitan: 2200,
  },
  {
    name: "Tháng 11",
    Cornestone: 3490,
    Canada: 4300,
    Fraser: 5000,
    Sportt: 3500,
    Metropolitan: 2200,
  },
  {
    name: "Tháng 12",
    Cornestone: 3350,
    Canada: 4280,
    Fraser: 1140,
    Sportt: 3990,
    Metropolitan: 2400,
  },
];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white dark:bg-background rounded-sm border border-gray-200 flex flex-col flex-1 mx-3 mt-4">
      <strong className="text-gray-700 dark:text-white font-semibold p-3">
        Độ thu hút các trường qua từng tháng
      </strong>
      <div className="w-full mt-3 flex-1 text-xs dark:text-white">
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
            <Bar
              dataKey="Cornestone"
              fill="#253C8A"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Fraser"
              fill="#99CA3B"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Metropolitan"
              fill="#013334"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Sportt"
              fill="#29C4F4"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Canada"
              fill="#D12030"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
