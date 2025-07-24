import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

// dashboard + about my inspo/project description
const NavBar = () => {
    return (
        <div className="side-navbar">
            <h2>CooperHewittData</h2>
            <Link to="/" className="nav-button">Dashboard</Link>
        </div>
    )
}

export default NavBar;