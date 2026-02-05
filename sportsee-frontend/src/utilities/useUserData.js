/**
 * useUserData hook that fetches and provides the main user dashboard data.
 */

import { useEffect, useState } from "react";
import { getUser } from "./api";
import { useParams } from "react-router-dom";

/**
 * Fetches user information, score, and nutrition data based on the route user id.
 *
 * @returns {Object} Object containing user data, loading state, and error state.
 */
const useUserData = () => {
  // Gets the user id from the URL parameters.
  const { userId } = useParams();

  // Stores user profile information.
  const [userInfos, setUserInfos] = useState(null);

  // Stores the user's daily score.
  const [todayScore, setTodayScore] = useState(null);

  // Stores nutrition key data values.
  const [keyData, setKeyData] = useState(null);

  // Stores loading state while fetching data.
  const [isLoading, setIsLoading] = useState(true);

  // Stores error state when fetching fails.
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetches the user data from the API.
    const fetchUser = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const user = await getUser(Number(userId));

        setUserInfos(user.data.userInfos);
        setTodayScore(user.data.todayScore);
        setKeyData(user.data.keyData);
      } catch (e) {
        console.error(e);
        setError(true);

        setUserInfos(null);
        setTodayScore(null);
        setKeyData(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  return { userInfos, todayScore, keyData, isLoading, error };
};

export default useUserData;
