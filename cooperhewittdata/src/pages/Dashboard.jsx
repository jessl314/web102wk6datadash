import React from 'react'
import Stats from '../components/Stats.jsx'
import CreationYearList from '../components/CreationYearList.jsx'
import { getMediumCounts } from "../utils/getMediumCounts";
import MediumChart from "../components/MediumChart";


const Dashboard = ({objects}) => {
    const mediumData = getMediumCounts(objects);
    return (
    <div className="app">
      <div className="stats">
        <h2>🎨 Contemporary Art On Display (1980–2025)</h2>
        <Stats objects={objects} />
        
      </div>
      <MediumChart data={mediumData} className='mediums' />
      <br />
      <CreationYearList objects={objects} />
    </div>
  );
}

export default Dashboard;