import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <p>Hunch Playground</p>
        <Routes>
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
