import { useState, useEffect } from 'react'
import './App.css'
import NavContainer from './components/NavContainer.jsx'
import Stats from './components/Stats.jsx'
import CreationYearList from './components/CreationYearList.jsx';

const API_TOKEN = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.collection.cooperhewitt.org/rest/"

// About: switch to a new tab with project description

function App() {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchAllOnDisplayObjects = async () => {
    setLoading(true);
    setError(null);
    
    let allObjects = [];
    let page = 1;
    let totalPages = 1;

    try {
      do {
        const response = await fetch(`${BASE_URL}?method=cooperhewitt.objects.getOnDisplay&access_token=${API_TOKEN}`)
        const data = await response.json()
        console.log("FULL API response:", data);
        console.log("Fetched objects:", data.objects);
        console.log("Total pages:", data.pages, "Total items:", data.total);

        if (!data.objects) throw new Error("no objects returned");

        allObjects = allObjects.concat(data.objects);
        totalPages = data.pages;
        page++
      } while (page <= totalPages)
      
      const filtered = allObjects.filter((obj) => (Number(obj.year_start) >= 1980 && Number(obj.year_start) <= 2025) || (Number(obj.year_end) >= 1980 && Number(obj.year_end) <= 2025))

      setObjects(filtered);

    } catch (err) {
      setError(err.message || "Failed to fetch objects");
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    fetchAllOnDisplayObjects();
  }, []);

  if (loading) return <p>Loading objects on display...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <>
    <NavContainer/>
    <div className="app">
      <h1>🎨 Contemporary Art On Display (1980-2025)</h1>
      <Stats objects={objects} />
      <CreationYearList objects={objects} />
    </div>
    </>
  )
}

export default App
