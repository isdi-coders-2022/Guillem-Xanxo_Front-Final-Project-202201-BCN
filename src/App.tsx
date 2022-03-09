import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TripsCronoPage from "./pages/TripsCronoPage";
import Button from "./components/ButtonComponent/ButtonComponent";

function App() {
  const AppAppearence = styled.div`
    background-color: #ebe7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <AppAppearence>
        <TripsCronoPage></TripsCronoPage>
      </AppAppearence>
      <Routes>
        <Route path="/*" element={<TripsCronoPage />}></Route>
        <Route path="/viatges/crono" element={<TripsCronoPage />}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
