/**
 * TopNavigation component that displays the main navigation links.
 */

import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Renders the top navigation menu with links to main pages.
 *
 * @returns {JSX.Element}
 */
const TopNavigation = () => {
  return (
    // Main navigation container displayed in the header.
    <nav className="top-navigation">
      {/* Navigation link to the home page. */}
      <NavLink to="/">Home</NavLink>

      {/* Navigation link to the profile page. */}
      <NavLink to="/profile">Profile</NavLink>

      {/* Navigation link to the settings page. */}
      <NavLink to="/settings">Settings</NavLink>

      {/* Navigation link to the community page. */}
      <NavLink to="/community">Community</NavLink>
    </nav>
  );
};

export default TopNavigation;
