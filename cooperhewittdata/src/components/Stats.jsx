import React from 'react'

const Stats = ({objects}) => {
    const modernObjects = objects.filter((obj) => (Number(obj.year_start) >= 1980 && Number(obj.year_start) <= 2025) || (Number(obj.year_end) >= 1980 && Number(obj.year_end) <= 2025))
    
    
    const years = modernObjects.map(o => Number(o.year_start ?? o.year_end)).filter(year => !isNaN(year))

    if (years.length === 0) return <p>No valid year data.</p>
    
    const mean = Math.round(years.reduce((a,b) => a + b, 0) / years.length);

    const frequency = {};
    years.forEach(year => {
    frequency[year] = (frequency[year] || 0) + 1;
    });
    const mode = Object.keys(frequency).reduce((a, b) =>
        frequency[a] > frequency[b] ? a : b
    );

    // Calculate range
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const range = maxYear - minYear;



    return (
    <>
    <div className='stat-card'>
        <p>Mean Year: {mean}</p>
    </div>
    <div className='stat-card'>
        <p>Mode Year: {mode}</p>
    </div>
    <div className='stat-card'>
        <p>Range Year: {minYear}-{maxYear}</p>
    </div>
    </>
    )
}

export default Stats;
