/**
 * Icons component that displays an SVG icon based on its name.
 */

/**
 * Renders an icon image using the provided icon name.
 *
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

export default Icons;

