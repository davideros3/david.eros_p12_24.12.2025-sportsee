/**
 * Home page component that displays the main dashboard content.
 */

import Greeting from "../components/Greeting";
import Nutritions from "../components/Nutritions";
import PerformanceRader from "../components/PerformanceRadar";
import DailyActivity from "../components/DailyActivity";
import useUserData from "../utilities/useUserData";
import AverageSessions from "../components/AverageSessions";
import PieScoreChart from "../components/PieScoreChart";
import { Navigate } from "react-router-dom";

/**
 * Renders the home dashboard using user data and chart components.
 *
 * @returns {JSX.Element|null}
 */
const Home = () => {
  // Gets user data and state from the custom hook.
  const { userInfos, todayScore, keyData, isLoading, error } = useUserData();

  // Stops rendering while data is loading.
  if (isLoading) return null;

  // Redirects to the error page if data is missing or an error occurs.
  if (error || !userInfos) {
    return <Navigate to="/404" replace />;
  }

  return (
    // Main container for the home page.
    <div className="home">
      {/* Displays the greeting message with the user's name. */}
      <Greeting userInfos={userInfos} />

      {/* Main content area holding charts and nutrition data. */}
      <div className="home-content">
        {/* Section displaying daily activity chart. */}
        <div className="daily-activity">
          <DailyActivity />
        </div>

        {/* Section displaying nutrition summary cards. */}
        <div className="nutritions">
          <Nutritions keyData={keyData} />
        </div>

        {/* Section displaying average session chart. */}
        <div className="average-session">
          <AverageSessions />
        </div>

        {/* Section displaying performance radar chart. */}
        <div className="performance">
          <PerformanceRader />
        </div>

        {/* Section displaying today's score chart. */}
        <div className="today-score">
          <PieScoreChart todayScore={todayScore} />
        </div>
      </div>
    </div>
  );
};

export default Home;

