import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#8884d8", "#8dd1e1", "#82ca9d", "#a4de6c", "#d0ed57",
  "#ffc658", "#ff8042", "#ffbb28", "#d0ed57", "#a28fd0"
];

const MediumChart = ({ data }) => (
  <div style={{ width: "100%", height: 400 }}>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="medium"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default MediumChart;
