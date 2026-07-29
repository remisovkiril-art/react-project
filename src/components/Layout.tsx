import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <Menu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
