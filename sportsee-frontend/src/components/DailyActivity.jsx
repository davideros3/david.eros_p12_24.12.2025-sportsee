/**
 * DailyActivity component that displays a bar chart of daily weight and calories.
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useUserActivity from "../utilities/useUserActivity";

/**
 * Labels used for the days shown on the chart.
 */
const DATUM_LABELS = ["1", "2", "3", "4", "5", "6", "7"];

/**
 * Renders the daily activity chart using session data.
 *
 * @returns {JSX.Element|null}
 */
const DailyActivity = () => {
  // Gets activity sessions from the custom hook.
  const { sessions } = useUserActivity();

  // Stops rendering if the data is not available yet.
  if (!sessions) return null;

  // Formats the sessions data for the bar chart.
  const data = sessions.map((item, index) => ({
    kg: item.kilogram,
    kcal: item.calories,
    datum: DATUM_LABELS[index],
  }));

  // Shows values when hovering over a bar.
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="activity-tooltip">
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    );
  };

  return (
    <section className="activity-card">
      <div className="activity-header">
        <h2>Daily activity</h2>
      </div>

      <div className="activity-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 30, left: 30, bottom: 5 }}
          >
            {/* Displays a light grid behind the chart. */}
            <CartesianGrid strokeDasharray="3" vertical={false} />

            {/* Displays the day labels on the X axis. */}
            <XAxis
              dataKey="datum"
              tickLine={false}
              axisLine={{ stroke: "#DEDEDE" }}
            />

            {/* Displays the weight scale on the right side. */}
            <YAxis
              yAxisId="kg"
              orientation="right"
              tickLine={false}
              axisLine={false}
              domain={["dataMin - 1", "dataMax + 1"]}
              tickCount={3}
            />

            {/* Hidden axis used for calories data. */}
            <YAxis yAxisId="kcal" hide />

            {/* Displays the custom tooltip on hover. */}
            <Tooltip content={CustomTooltip} />

            {/* Displays the chart legend at the top right. */}
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingBottom: 60 }}
              className="activity-legend"
            />

            {/* Bar that displays the user's weight in kilograms. */}
            <Bar
              yAxisId="kg"
              dataKey="kg"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              barSize={10}
              name="Weight (kg)"
            />

            {/* Bar that displays the user's burned calories. */}
            <Bar
              yAxisId="kcal"
              dataKey="kcal"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              barSize={10}
              name="Burned calories (kCal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default DailyActivity;
