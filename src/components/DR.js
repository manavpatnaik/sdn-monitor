import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { NO_DR_DATA as data } from "../data";

const DR = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,    
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis tick={false} />
        <YAxis tick={false} />
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Line
          type="monotone"
          dataKey="consumerHome"
          stroke="#881699"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="consumerHomeTwo"
          stroke="#612a1f"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="consumerManufacturing"
          stroke="#006bba"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="consumerHome_Solar"
          stroke="#005f00"
          dot={false}
        />
        <Line type="monotone" dataKey="total" stroke="#000054" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DR;
