// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Showcase from "./components/Showcase";
import ProductList from "./components/ProductList";
import ProductManual from "./components/ProductManual";
import CompanyProfile from "./components/CompanyProfile";
import DeveloperPage from "./components/DeveloperPage";
import EmployeeResume from "./components/EmployeeResume";
import ReviewPage from "./components/ReviewPage";
import MissionVision from "./components/MissionVision";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductManual />} />
        <Route path="/profile" element={<CompanyProfile />} />
        <Route path="/profile/:employeeId" element={<EmployeeResume />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
