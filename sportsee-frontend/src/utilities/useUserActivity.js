/**
 * useUserActivity hook that fetches and provides the user's activity sessions.
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserActivity } from "./api";

/**
 * Fetches user activity data based on the route user id.
 *
 * @returns {Object} Object containing the user's activity sessions.
 */
const useUserActivity = () => {
  // Gets the user id from the URL parameters.
  const { userId } = useParams();

  // Stores the activity sessions data.
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    // Fetches the user activity data from the API.
    const fetchUser = async () => {
      try {
        const user = await getUserActivity(Number(userId));
        setSessions(user.data.sessions);
      } catch (e) {
        console.error(e);
        setSessions(null);
      }
    };

    fetchUser();
  }, [userId]);

  return {
    sessions,
  };
};

export default useUserActivity;

