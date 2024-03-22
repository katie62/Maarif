import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";


function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/iletisim" element={<Contact />} />
    </Routes> 
  );
}
export default SiteRoutes;
