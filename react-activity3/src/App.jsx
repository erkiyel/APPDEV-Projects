import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductOverview from './components/ProductOverview';
import Specifications from './components/Specifications';
import InTheBox from './components/InTheBox';
import KeyFeatures from './components/KeyFeatures.jsx';
import SetupInstructions from './components/SetupInstructions.jsx/';
import Troubleshooting from './components/Troubleshooting.jsx/';
import MaintenanceCare from './components/MaintenanceCare';
import WarrantySupport from './components/WarrantySupport';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/overview">Product Overview</Link></li>
            <li><Link to="/specifications">Specifications</Link></li>
            <li><Link to="/inthebox">In the Box</Link></li>
            <li><Link to="/keyfeatures">Key Features</Link></li>
            <li><Link to="/setup">Setup Instructions</Link></li>
            <li><Link to="/troubleshooting">Troubleshooting</Link></li>
            <li><Link to="/maintenance">Maintenance & Care</Link></li>
            <li><Link to="/warranty">Warranty & Support</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to the KB-X1000 Product Page</h1>} />
          <Route path="/overview" element={<ProductOverview />} />
          <Route path="/specifications" element={<Specifications />} />
          <Route path="/inthebox" element={<InTheBox />} />
          <Route path="/keyfeatures" element={<KeyFeatures />} />
          <Route path="/setup" element={<SetupInstructions />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/maintenance" element={<MaintenanceCare />} />
          <Route path="/warranty" element={<WarrantySupport />} />
        </Routes>
      </div>
    </Router>
  );
}