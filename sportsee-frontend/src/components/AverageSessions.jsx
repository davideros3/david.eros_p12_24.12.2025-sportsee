/**
 * AverageSessions component that displays a line chart of the user's average session duration.
 */

import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import useUserAverageSessions from "../utilities/useUserAverageSessions";

const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * Renders the average sessions chart using data from the custom hook.
 *
 * @returns {JSX.Element|null}
 */
const AverageSessions = () => {
  const { averageSessions } = useUserAverageSessions();
  if (!averageSessions) return null;

  const data = averageSessions.map((item) => ({
    day: DAY_LABELS[item.day - 1],
    sessionLength: item.sessionLength,
  }));

  return (
    // Main container for the average sessions chart.
    // It applies the red card style for this chart.
    <div className="chart-card chart-card--red average-card">
      {/* Displays the chart title above the line chart. */}
      <p className="average-title">
        Average speed of <br />
        your sessions
      </p>

      {/* Holds the responsive line chart. */}
      <div className="average-chart">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 30, right: 10, left: 10, bottom: 10 }}>
            {/* Defines the gradient used for the line color. */}
            <defs>
              <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
            </defs>

            {/* Displays the day labels on the X axis. */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
              dy={10}
            />

            {/* Displays the tooltip and hover cursor on the chart. */}
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

            {/* Displays the average session line. */}
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#lineColor)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "rgba(255,255,255,0.3)",
                strokeWidth: 10,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

/**
 * Displays the tooltip content when hovering the line.
 *
 * @returns {JSX.Element|null}
 */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return <div className="average-tooltip">{payload[0].value} min</div>;
};

/**
 * Displays a dark overlay to highlight the hovered area.
 *
 * @returns {JSX.Element|null}
 */
const CustomCursor = ({ points, width, height }) => {
  if (!points?.length) return null;

  const x = points[0].x;
  return (
    <rect
      x={x}
      y={0}
      width={width - x}
      height={height}
      fill="rgba(0,0,0,0.10)"
    />
  );
};

export default AverageSessions;
