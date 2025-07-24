import React from 'react'
import Stats from '../components/Stats.jsx'
import CreationYearList from '../components/CreationYearList.jsx'
import { getMediumCounts } from "../utils/getMediumCounts";
import { getScatterData }from "../utils/getScatterData";
import MediumChart from "../components/MediumChart";
import ScatterPlot from "../components/ScatterPlot";


const Dashboard = ({objects}) => {
    const mediumData = getMediumCounts(objects);
    const scatterData = getScatterData(objects);

    return (
    <div className="app">
      <div style={{ display: 'flex', width: '100%' }} className="dashboard-main">
        <div className="stats">
          <h2>🎨 Contemporary Art On Display (1980–2025)</h2>
          <Stats objects={objects} />
          <br></br>
          <CreationYearList objects={objects} />
        </div>
      </div>
     
      <div className="mediums">
        <h2>Art Mediums Pie Chart</h2>
        <MediumChart data={mediumData} />
      </div>
      <h2>Creation Year vs. Display Year</h2>
      <ScatterPlot data={scatterData} />
    </div>
  );
}

export default Dashboard;