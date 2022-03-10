import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ShowTripsPage from "./pages/ShowTripsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crono" element={<ShowTripsPage />}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
