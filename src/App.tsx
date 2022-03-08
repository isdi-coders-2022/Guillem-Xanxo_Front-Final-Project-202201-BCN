import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return;
  <>
    <Routes>
      <Route path="/*" element={<TripsCronoPage />}></Route>
      <Route path="/viatges/crono" element={<TripsCronoPage />}></Route>
    </Routes>
    ;
  </>;
}

export default App;
