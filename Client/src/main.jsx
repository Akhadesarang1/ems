// Corrected src/main.jsx

<<<<<<< HEAD
import React, { StrictMode } from "react";
=======
import { StrictMode } from "react";
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
