/**
 * PerformanceRadar component that displays user performance data in a radar chart.
 */

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import useUserPerformance from "../utilities/useUserPerformance";

/**
 * Renders a radar chart showing different performance metrics.
 *
 * @returns {JSX.Element|null}
 */
const PerformanceRadar = () => {
  // Gets performance labels and values from the custom hook.
  const { performance, performanceData } = useUserPerformance();

  // Stops rendering if performance data is not available.
  if (!performance || !performanceData) return null;

  // Formats the performance data to match the radar chart structure.
  const chartData = performanceData.map((item) => ({
    subject: performance[item.kind],
    value: item.value,
  }));

  return (
    // Main container for the performance radar chart.
    // It applies a dark style to the chart card.
    <div className="chart-card chart-card--dark">
      {/* Makes the chart responsive to its container size. */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={chartData} outerRadius="75%">
          {/* Displays the grid lines of the radar chart. */}
          <PolarGrid stroke="#FFFFFF" radialLines={false} />

          {/* Displays the labels around the radar chart. */}
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 10, fill: "#FFFFFF" }}
          />

          {/* Hides the radius axis for a cleaner look. */}
          <PolarRadiusAxis tick={false} axisLine={false} />

          {/* Displays the red radar shape representing performance values. */}
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadar;
