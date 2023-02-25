import React from "react";
import Page1 from "pages/1";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
  );
};

export default App;
