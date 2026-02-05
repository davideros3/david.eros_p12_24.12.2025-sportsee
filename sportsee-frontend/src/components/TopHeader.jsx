/**
 * TopHeader component that displays the top header of the application.
 */

import React from "react";
import Logo from "./Logo";
import TopNavigation from "./TopNavigation";
import imageLogo from "../assets/sportsee-logo.png";

/**
 * Renders the top header with the logo and navigation menu.
 *
 * @returns {JSX.Element}
 */
const TopHeader = () => {
  return (
    // Main header container displayed at the top of the page.
    <header className="top-header">
      {/* Displays the application logo on the left side. */}
      <Logo logo={imageLogo} />

      {/* Displays the top navigation menu. */}
      <TopNavigation />
    </header>
  );
};

export default TopHeader;



