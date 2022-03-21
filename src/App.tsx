import React from "react";
import { Route, Routes } from "react-router-dom";

import ShowTripsPage from "./pages/ShowTripsPage";
import CreateTripPage from "./pages/CreateTripPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import UserHomePage from "./pages/UserHomePage";
import ShowTripDetailPage from "./pages/ShowTripDetailPage";
import Toastr from "./components/Toastr/Toastr";

function App() {
  const token = localStorage.getItem("tokenKey");

  return (
    <>
      <Toastr />
      <Routes>
        <Route path="/*" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crono" element={<ShowTripsPage />}></Route>
        <Route path="/viatges/crear" element={<CreateTripPage />}></Route>
        <Route
          path="viatges/detall/:id"
          element={<ShowTripDetailPage />}
        ></Route>
        <Route path="/viatges/desti" element={<></>}></Route>
        <Route path="/viatges/origen" element={<></>}></Route>
        <Route path="/usuari/login" element={<UserLoginPage />}></Route>
        <Route path="/usuari/register" element={<UserRegisterPage />}></Route>

        <Route path="/usuari/home" element={<UserHomePage />}></Route>
        <Route path="/usuari/viatges" element={<></>}></Route>
        <Route path="/usuari/viatges/detall" element={<></>}></Route>
      </Routes>
    </>
  );
}

export default App;
