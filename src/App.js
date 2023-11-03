import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MyComponent from "./Components/MyComponent";
// Define your components for each page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
