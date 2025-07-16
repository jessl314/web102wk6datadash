import React from 'react'
import "./About.css"

// dashboard + about my inspo/project description
const About = () => {
    return (
        <div className="side-navbar">
            <h2>CooperHewittData</h2>
            <p>This dashboard shows data about the current Contemporary Art (1980-2025) on display at the Cooper Hewitt Smithsonian Design Museum.</p>
            <br></br>
            <p>The top statistics show the mean, mode and range of creation years for the art</p>
            <br></br>
            <p>Then below we have a table that displays information about each piece of art from this era. We can also filter and search for the art by year created or by medium</p>

           
        </div>
    )
}

export default About;