import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import useUserAverageSessions from "../utilities/useUserAverageSessions";
import PropTypes from "prop-types";

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
    <div className="chart-card chart-card--red average-card">
      <p className="average-title">
        Average speed of <br />
        your sessions
      </p>

      <div className="average-chart">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 30, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
              dy={10}
            />

            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

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
 * @param {Object} props
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - Data displayed inside the tooltip.
 * @returns {JSX.Element|null}
 */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return <div className="average-tooltip">{payload[0].value} min</div>;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

/**
 * Displays a dark overlay to highlight the hovered area.
 *
 * @param {Object} props
 * @param {Array} props.points - Coordinates of the hovered point.
 * @param {number} props.width - Width of the chart area.
 * @param {number} props.height - Height of the chart area.
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

CustomCursor.propTypes = {
  points: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default AverageSessions;

