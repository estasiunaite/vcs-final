import React from "react";
import Home from "./Pages/Home";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ContactUs from "./Pages/ContactUs";
import FoodPage from "./Pages/FoodPage";
import Login from "./Pages/Login";
import SubscriptionsPage from "./Pages/SubscriptionsPage";
import YogaPage from "./Pages/YogaPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ActivitiesPage" element={<ActivitiesPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FoodPage" element={<FoodPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SubscriptionsPage" element={<SubscriptionsPage />} />
        <Route path="/YogaPage" element={<YogaPage />} />
      </Routes>
    </div>
  );
};

export default App;
