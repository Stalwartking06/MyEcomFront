import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./redux/store"; // Named import
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create root element and render the App inside Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Wrap your App component with the Provider */}
    <App />
  </Provider>
);

reportWebVitals();
