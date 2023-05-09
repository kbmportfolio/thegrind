import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header"
import Checkout from "./components/Checkout/Checkout"
// import Payment from "./components/Payment/Payment";

function App() {
  return (
    <div>
      <Router>
      <Header /> 
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
        
        </Routes>
      </Router>
    </div>
  );
}
export default App;