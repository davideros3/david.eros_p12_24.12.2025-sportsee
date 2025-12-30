const API_BASE_URL = "http://localhost:3000";

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error ${res.status} for ${url}`);
  }
  
  return res.json();
}

// 4 endpoints 
export const getUser = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}`);

export const getUserActivity = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/activity`);

export const getUserAverageSessions = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/average-sessions`);

export const getUserPerformance = (userId) =>
  getJson(`${API_BASE_URL}/user/${userId}/performance`);


async function testApi() {
  try {
    const user = await getUser(12);
    console.log("User:", user);

    const activity = await getUserActivity(12);
    console.log("Activity:", activity);

    const averageSessions = await getUserAverageSessions(12);
    console.log("Average sessions:", averageSessions);

    const performance = await getUserPerformance(12);
    console.log("Performance:", performance);
  } catch (error) {
    console.error("API error:", error);
  }
}

testApi();

export default testApi;