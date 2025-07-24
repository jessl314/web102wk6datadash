import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

export function getScatterData(objects) {
  const yearCounts = {};

  objects.forEach(obj => {
    const year = parseInt(obj.year_start ?? obj.year_end);
    if (!isNaN(year)) {
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    }
  });

  // Convert to array for recharts
  return Object.entries(yearCounts)
    .map(([year, count]) => ({ year: parseInt(year), count }))
    .sort((a, b) => a.year - b.year);
}