import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label
  } from "recharts";
  
  const ScatterPlot = ({ data }) => {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis dataKey="year" name="Year" type="number" domain={[1980, 2025]}>
              <Label value="Year" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis dataKey="count" name="Number of Items" type="number">
              <Label value="Number of Items" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Scatter name="Items per Year" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default ScatterPlot;
  