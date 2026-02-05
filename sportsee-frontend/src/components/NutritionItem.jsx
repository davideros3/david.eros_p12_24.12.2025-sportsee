/**
 * NutritionItem component that displays a nutrition value with an icon and label.
 */

import Icons from "./Icons";

/**
 * Renders a nutrition item using the provided data.
 *
 * @returns {JSX.Element}
 */
const NutritionItem = ({ icon_name, value, unit, label }) => {
  return (
    <div className="nutrition-item">
      <Icons icon_name={icon_name} label={label} />

      <div className="nutrition-text">
        <span className="nutrition-value">
          {value}
          <span className="nutrition-unit">{unit}</span>
        </span>

        <p className="nutrition-label">{label}</p>
      </div>
    </div>
  );
};

export default NutritionItem;


