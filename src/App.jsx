import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import OfferPage from "./features/offer/pages/OfferPage.jsx";

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200">
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/sport-events" element={<OfferPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
