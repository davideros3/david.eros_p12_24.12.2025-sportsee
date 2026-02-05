/**
 * PieScoreChart component that displays the user's score as a pie chart.
 */

import { ResponsiveContainer, PieChart, Pie } from "recharts";

/**
 * Renders a circular chart showing the daily score percentage.
 *
 * @returns {JSX.Element|null}
 */
const PieScoreChart = ({ todayScore }) => {
  // Stops rendering if the score is not available.
  if (todayScore == null) return null;

  // Converts the score value into a percentage.
  const score = Math.round(todayScore * 100);

  // Builds the data used to display the filled and remaining parts of the chart.
  const data = [
    { name: "score", value: score, fill: "#FF0000" },
    { name: "rest", value: 100 - score, fill: "#FBFBFB" },
  ];

  return (
    // Main container for the score chart.
    // It applies a light style to the chart card.
    <div className="chart-card chart-card--light">
      {/* Displays the chart title above the pie chart. */}
      <p className="chart-title">Score</p>

      {/* Makes the pie chart responsive to its container size. */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Displays the circular progress based on the score value. */}
          <Pie
            data={data}
            dataKey="value"
            innerRadius="60%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
          />

          {/* Displays the score percentage at the center of the chart. */}
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={24}
            fontWeight="bold"
          >
            {score}%
          </text>

          {/* Displays the subtitle text under the score percentage. */}
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={14}
            fill="#74798C"
          >
            of your goal
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieScoreChart;
