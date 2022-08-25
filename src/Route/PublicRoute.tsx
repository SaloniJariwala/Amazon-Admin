import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import { IRouteContainerProps } from "../Types/Route";

const PublicRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return Component
    } else {
        return <Home />
    }
};

export default PublicRoute;