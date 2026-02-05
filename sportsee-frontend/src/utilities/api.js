/**
 * API utility functions used to fetch user data from the backend.
 */

// Base URL for all API requests.
const API_BASE_URL = "http://localhost:3000";

/**
 * Fetches JSON data from the given API endpoint.
 *
 * @returns {Promise<Object>}
 */
async function getJson(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API error ${res.status} for ${url}`);
  }

  return res.json();
}

// Fetches main user information by user id.
export const getUser = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}`);

// Fetches user daily activity sessions.
export const getUserActivity = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/activity`);

// Fetches user average session data.
export const getUserAverageSessions = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/average-sessions`);

// Fetches user performance metrics.
export const getUserPerformance = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/performance`);



