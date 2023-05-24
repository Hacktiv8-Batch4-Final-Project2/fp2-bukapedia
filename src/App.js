import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./components/templates/ProductDetails";

import Admin from "./pages/Admin"
import Login from "./pages/Login"

import WithNav from "./components/organisms/WithNav";
import WithoutNav from "./components/organisms/WithoutNav";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route element={<WithNav/>}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<WithoutNav/>}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
