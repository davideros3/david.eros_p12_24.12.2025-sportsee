import React from "react";
// import Logo from "./Logo"
import { NavLink } from "react-router-dom";
 

const TopNavigation = () => {
    return (
        <nav className="top-navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <NavLink to="/community">Community</NavLink>
        </nav>

        
    )

}

export default TopNavigation;