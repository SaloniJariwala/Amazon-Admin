import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import PublicRoute from "./PublicRoute";
import { Routepaths } from "./RoutePaths";

const Router = () => {
    return (
        <Routes>
            <Route path={Routepaths.home} element={<PublicRoute Component={<Home />} />} />
            <Route path={Routepaths.signin} element={<PublicRoute Component={<SignIn />} />} />
        </Routes>
    );
};

export default Router;