import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ShowTripsPage from "./pages/ShowTripsPage";

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
        <ShowTripsPage></ShowTripsPage>
      </AppAppearence>
      <Routes>
        <Route path="/*" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crono" element={<ShowTripsPage />}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
