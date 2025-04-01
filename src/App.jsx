import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="home" index element={<Home />} />
          <Route path="gallery" element={<Gallery />} /> 
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
