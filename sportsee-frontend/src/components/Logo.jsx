/**
 * Logo component that displays the application logo image.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Renders the logo image using the provided source.
 *
 * @param {Object} props
 * @param {string} props.logo - Path to the logo image.
 * @returns {JSX.Element}
 */
const Logo = ({ logo }) => {
  return <img className="logo" alt="Logo Sportsee" src={logo} />;
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;






