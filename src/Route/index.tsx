import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Routepaths } from "./RoutePaths";

const Router = () => {
    return (
        <Routes>
            <Route path={Routepaths.home} element={<PublicRoute Component={<Home />} />} />
            <Route path={Routepaths.signin} element={<PublicRoute Component={<SignIn />} />} />
            <Route path={Routepaths.signup} element={<PublicRoute Component={<SignUp />} />} />
            <Route path={Routepaths.dashboard} element={<PrivateRoute Component={<Dashboard />} />} />
        </Routes>
    );
};

export default Router;