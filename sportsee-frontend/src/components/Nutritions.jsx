/**
 * Nutritions component that displays a list of nutrition values.
 */

import Icons from "./Icons";
import NutritionItem from "./NutritionItem";
import PropTypes from "prop-types";

/**
 * Renders nutrition items using the provided nutrition data.
 *
 * @param {Object} props
 * @param {Object} props.keyData - Object containing nutrition values.
 * @param {number} props.keyData.calorieCount - Total calories.
 * @param {number} props.keyData.proteinCount - Total proteins.
 * @param {number} props.keyData.carbohydrateCount - Total carbohydrates.
 * @param {number} props.keyData.lipidCount - Total lipids.
 * @returns {JSX.Element|null}
 */
const Nutritions = ({ keyData }) => {
  // Stops rendering if nutrition data is not available.
  if (!keyData) return null;

  // Extracts nutrition values from the user data object.
  const {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  } = keyData;

  // Creates a list of nutrition items used to render the UI.
  const items = [
    { icon_name: "calories", value: calorieCount, unit: "kcal", label: "Calories" },
    { icon_name: "protein", value: proteinCount, unit: "g", label: "Proteins" },
    { icon_name: "carbs", value: carbohydrateCount, unit: "g", label: "Carbs" },
    { icon_name: "lipids", value: lipidCount, unit: "g", label: "Lipids" },
  ];

  return (
    <div className="nutritions-layout">
      {items.map(({ icon_name, value, unit, label }) => (
        <NutritionItem
          key={label}
          icon_name={icon_name}
          value={value}
          unit={unit}
          label={label}
        />
      ))}
    </div>
  );
};

Nutritions.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};

export default Nutritions;
