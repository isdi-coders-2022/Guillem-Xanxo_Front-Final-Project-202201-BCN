import React from "react";
import { Route, Routes } from "react-router-dom";
import TripsCronoPage from "./pages/TripsCronoPage";

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
