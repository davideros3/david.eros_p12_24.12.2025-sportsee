/**
 * useUserPerformance hook that fetches and provides the user's performance data.
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPerformance } from "./api";

/**
 * Fetches performance metrics and labels based on the route user id.
 *
 * @returns {Object} Object containing performance labels and performance values.
 */
const useUserPerformance = () => {
  // Gets the user id from the URL parameters.
  const { userId } = useParams();

  // Stores the performance kind labels.
  const [performance, setPerformance] = useState(null);

  // Stores the performance values.
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    // Fetches the user's performance data from the API.
    const fetchPerformance = async () => {
      try {
        const res = await getUserPerformance(Number(userId));
        setPerformance(res.data.kind);
        setPerformanceData(res.data.data);
      } catch (e) {
        console.error(e);
        setPerformance(null);
        setPerformanceData(null);
      }
    };

    if (userId) fetchPerformance();
  }, [userId]);

  return { performance, performanceData };
};

export default useUserPerformance;

