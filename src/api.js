import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Fetch user data
export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return null;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.error("Logout failed:", error.response?.data);
  }
};
