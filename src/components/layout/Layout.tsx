import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-7xl px-6 py-8">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
