/**
 * PieScoreChart component that displays the user's score as a pie chart.
 */

import { ResponsiveContainer, PieChart, Pie } from "recharts";
import PropTypes from "prop-types";

/**
 * Renders a circular chart showing the daily score percentage.
 *
 * @param {Object} props
 * @param {number} props.todayScore - User's daily score (value between 0 and 1).
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
    <div className="chart-card chart-card--light">
      <p className="chart-title">Score</p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="60%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
          />

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

PieScoreChart.propTypes = {
  todayScore: PropTypes.number,
};

export default PieScoreChart;
