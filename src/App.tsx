import React from "react";
import { Route, Routes } from "react-router-dom";

import ShowTripsPage from "./pages/ShowTripsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crono" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/detall" element={<></>}></Route>
        <Route path="/viatges/desti" element={<></>}></Route>
        <Route path="/viatges/origen" element={<></>}></Route>
        <Route path="/usuari/login" element={<></>}></Route>
        <Route path="/usuari/registre" element={<></>}></Route>
        <Route path="/usuari/viatges" element={<></>}></Route>
        <Route path="/usuari/viatges/detall" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
