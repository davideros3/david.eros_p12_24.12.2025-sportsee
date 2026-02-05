/**
 * LeftNavbar component that displays navigation icons and a footer text.
 */

import Icons from "./Icons";

/**
 * Renders the left navigation bar with activity icons.
 *
 * @returns {JSX.Element}
 */
const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <Icons icon_name="meditation" label="meditation" />
      <Icons icon_name="swim" label="swiming" />
      <Icons icon_name="bike" label="Bycicle" />
      <Icons icon_name="dumbbell" label="dumbbell" />
      <p> Copiryght, SportSee 2020 </p>
    </div>
  );
};

export default LeftNavbar;

