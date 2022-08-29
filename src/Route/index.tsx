import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PublicRoute from "./PublicRoute";
import { Routepaths } from "./RoutePaths";

const Router = () => {
    return (
        <Routes>
            <Route path={Routepaths.home} element={<PublicRoute Component={<Home />} />} />
            <Route path={Routepaths.signin} element={<PublicRoute Component={<SignIn />} />} />
            <Route path={Routepaths.signup} element={<PublicRoute Component={<SignUp />} />} />
        </Routes>
    );
};

export default Router;