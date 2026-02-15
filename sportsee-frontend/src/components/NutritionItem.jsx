/**
 * NutritionItem component that displays a nutrition value with an icon and label.
 */

import Icons from "./Icons";
import PropTypes from "prop-types";

/**
 * Renders a nutrition item using the provided data.
 *
 * @param {Object} props
 * @param {string} props.icon_name - Name of the icon to display.
 * @param {number} props.value - Nutrition value.
 * @param {string} props.unit - Unit of the nutrition value.
 * @param {string} props.label - Label of the nutrition type.
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

NutritionItem.propTypes = {
  icon_name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NutritionItem;


