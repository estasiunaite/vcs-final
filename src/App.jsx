import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudioPage from "./Pages/StudioPage";
import ContactUs from "./Pages/ContactUs";
import FoodPage from "./Pages/FoodPage";
import Login from "./Pages/Login";
import SubscriptionsPage from "./Pages/SubscriptionsPage";
import YogaPage from "./Pages/YogaPage";
import CheckSchedulePage from "./Pages/CheckSchedulePage";
import EquipmentPage from "./Pages/EquipmentPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudioPage" element={<StudioPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FoodPage" element={<FoodPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SubscriptionsPage" element={<SubscriptionsPage />} />
        <Route path="/YogaPage" element={<YogaPage />} />
        <Route path="/CheckSchedulePage" element={<CheckSchedulePage />} />
        <Route path="/EquipmentPage" element={<EquipmentPage />} />
      </Routes>
    </div>
  );
};

export default App;
