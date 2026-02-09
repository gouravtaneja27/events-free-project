import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home.jsx"
import Event from "./pages/Event.jsx"
import Feed from "./pages/Feed.jsx"
import User from "./pages/Username.jsx"
function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </section>
  );
}
export default App;