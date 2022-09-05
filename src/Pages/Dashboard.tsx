import React from "react";
import Dashboard from "../Components/Dashboard";
import SellerHeader from "../Layout/SellerHeader";

const Home: React.FC = () => {
    return (
        <>
            <SellerHeader />
            <Dashboard />
        </>
    );
};

export default Home;