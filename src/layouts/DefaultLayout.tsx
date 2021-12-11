import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

type DefaultLayoutProps = {

};

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultLayout;