import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import OfferPage from "./features/offer/pages/OfferPage.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/sport-events" element={<OfferPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
