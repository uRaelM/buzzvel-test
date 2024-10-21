import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "typeface-roboto";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para 404 - página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
