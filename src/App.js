import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './components/templates/ProductDetails';

import Admin from './pages/Admin';
import Login from './pages/Login';

import Sidebar from './components/organisms/Navbar';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
