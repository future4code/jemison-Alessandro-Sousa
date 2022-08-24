import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import ApplicationForm from "./pages/ApplicationForm";
import CreateTrip from "./pages/CreateTrip";
import Home from "./pages/Home";
import ListTrips from "./pages/ListTrips";
import Login from "./pages/Login";
import TripDetails from "./pages/TripDetails";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home />}   />
                <Route path="/trips" element={ <ListTrips/> } />
                <Route path="/application-form" element={ <ApplicationForm/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/admin-home" element={ <AdminHome/> } />
                <Route path="/create-trip" element={ <CreateTrip/> } />
                <Route path="/trip-details" element={ <TripDetails/> } />



            </Routes>
        </BrowserRouter>
    )
}

export default Router