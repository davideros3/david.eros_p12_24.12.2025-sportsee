/**
 * Logo component that displays the application logo image.
 */

import React from "react";

/**
 * Renders the logo image using the provided source.
 *
 * @returns {JSX.Element}
 */
const Logo = ({ logo }) => {
  return <img className="logo" alt="Logo Sportsee" src={logo} />;
};

export default Logo;





