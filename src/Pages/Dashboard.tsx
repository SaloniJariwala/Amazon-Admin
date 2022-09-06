import React from "react";
import Dashboard from "../Components/Dashboard";
import SellerHeader from "../Layout/SellerHeader";

const DashboardPage: React.FC = () => {
    return (
        <>
            <SellerHeader />
            <Dashboard />
        </>
    );
};

export default DashboardPage;