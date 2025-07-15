import React from 'react'
import "./NavContainer.css"

// dashboard + about my inspo/project description
const NavContainer = () => {
    return (
        <nav className="side-navbar">
            <h2>CooperHewittData</h2>
            <ul className="nav-links">
                <li><a href="#stats">Stats</a></li>
                <li><a href="#About">About</a></li>
            </ul>
        </nav>
    )
}

export default NavContainer;