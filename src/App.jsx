import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./common/Loader.jsx"; // Create a separate loader component

// Lazy load pages
const Home = lazy(() => import("./pages/home/Home"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Events = lazy(() => import("./pages/events/Events"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" index element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
