import React from "react";
import Home from "./Screens/Home";
import Pdp from "./Screens/Pdp";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./Store/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Pdp />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
