/**
 * Icons component that displays an SVG icon based on its name.
 */

import PropTypes from "prop-types";

/**
 * Renders an icon image using the provided icon name.
 *
 * @param {Object} props
 * @param {string} props.icon_name - Name of the icon file to display.
 * @returns {JSX.Element}
 */
const Icons = ({ icon_name }) => {
  // Creates a readable alt text from the icon name.
  const imgAlt =
    icon_name.charAt(0).toUpperCase() + icon_name.slice(1) + " icon";

  return (
    <img
      className="icon"
      src={`/src/assets/icons/${icon_name}.svg`}
      alt={imgAlt}
    />
  );
};

Icons.propTypes = {
  icon_name: PropTypes.string.isRequired,
};

export default Icons;


