import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
