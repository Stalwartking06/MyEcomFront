import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

// Load Redux state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Error loading state:", err);
    return undefined;
  }
};

// Save Redux state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Error saving state:", err);
  }
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: { cart: loadState() }, // Load cart state from localStorage
});

// Save state to localStorage whenever Redux state changes
store.subscribe(() => {
  saveState(store.getState().cart);
});
