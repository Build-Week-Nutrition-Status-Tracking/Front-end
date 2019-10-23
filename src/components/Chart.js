import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

function createData(month, weight) {
  return { month, weight };
}

const data = [
  createData("Jan", 50),
  createData("Feb", 55),
  createData("March", 60),
  createData("April", 65),
  createData("June", 70),
  createData("July", 75),
  createData("Aug", 80),
  createData("Sep", 85),
  createData("Oct", undefined)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Growth Chart</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="month" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Weight (lbs)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="weight" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
