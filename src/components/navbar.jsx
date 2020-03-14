import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (

            <nav className="navbar center navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    NavBar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </a>
            </nav>
    )
}


 
export default NavBar;