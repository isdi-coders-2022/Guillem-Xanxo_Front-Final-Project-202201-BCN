import React from "react";
import { Route, Routes } from "react-router-dom";

import ShowTripsPage from "./pages/ShowTripsPage";
import CreateTripPage from "./pages/CreateTripPage";
import UserLoginPage from "./pages/UserLoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crono" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crear" element={<CreateTripPage />}></Route>
        <Route path="/viatges/detall" element={<></>}></Route>
        <Route path="/viatges/desti" element={<></>}></Route>
        <Route path="/viatges/origen" element={<></>}></Route>
        <Route path="/usuari/login" element={<UserLoginPage />}></Route>
        <Route path="/usuari/registre" element={<></>}></Route>
        <Route path="/usuari/viatges" element={<></>}></Route>
        <Route path="/usuari/viatges/detall" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
