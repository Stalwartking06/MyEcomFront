import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: storedUser || null, // Load user if exists
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Store user
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // ✅ Remove user on logout
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
