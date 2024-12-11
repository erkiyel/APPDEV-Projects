// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductManual from "./components/ProductManual";
import CompanyProfile from "./components/CompanyProfile";
import DeveloperPage from "./components/DeveloperPage";
import EmployeeResume from "./components/EmployeeResume";
import ReviewPage from "./components/ReviewPage";
import Showcase from "./components/Showcase"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductManual />} />
        <Route path="/employee/:employeeId" element={<EmployeeResume />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
