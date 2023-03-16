import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/cart" />
      </Routes>
    </>
  );
}

export default App;
