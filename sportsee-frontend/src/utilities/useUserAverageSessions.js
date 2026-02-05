/**
 * useUserAverageSessions hook that fetches and provides the user's average session data.
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAverageSessions } from "./api";

/**
 * Fetches average session data based on the route user id.
 *
 * @returns {Object} Object containing the user's average sessions.
 */
const useUserAverageSessions = () => {
  // Gets the user id from the URL parameters.
  const { userId } = useParams();

  // Stores the average session data.
  const [averageSessions, setAverageSessions] = useState(null);

  useEffect(() => {
    // Fetches the user's average sessions from the API.
    const fetchAverage = async () => {
      try {
        const res = await getUserAverageSessions(Number(userId));
        setAverageSessions(res.data.sessions);
      } catch (e) {
        console.error(e);
        setAverageSessions(null);
      }
    };

    if (userId) fetchAverage();
  }, [userId]);

  return { averageSessions };
};

export default useUserAverageSessions;

