// src/App.jsx
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import your page components
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import EmployeeDashboard from "./EmployeeDashBoard";
import Login from "./Login";
import SignUp from "./Signup"; // Make sure the filename is correct (e.g., SignUp.jsx)

function App() {
  return (
    // The BrowserRouter enables routing for the entire app
    <BrowserRouter>
      {/* The Routes component acts as a wrapper for all individual routes */}
      <Routes>
        {/* Define each route with its path and the component to render */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        {/* It's good practice to have a default route for the base URL */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
