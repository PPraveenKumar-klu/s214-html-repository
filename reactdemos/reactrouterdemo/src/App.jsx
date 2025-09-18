import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
