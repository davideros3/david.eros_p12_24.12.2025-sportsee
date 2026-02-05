/**
 * Nutritions component that displays a list of nutrition values.
 */

import Icons from "./Icons";
import NutritionItem from "./NutritionItem";

/**
 * Renders nutrition items using the provided nutrition data.
 *
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
    // Main layout container for all nutrition cards.
    // It groups all nutrition items in a single section.
    <div className="nutritions-layout">
      {/* Loops through nutrition items and renders one component per value. */}
      {/* Each NutritionItem shows an icon, a value, and a label. */}
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

export default Nutritions;
