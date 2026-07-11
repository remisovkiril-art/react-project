import { Outlet } from "react-router";
import Menu from "./Menu";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Menu />
            <main className="container mx-auto px-4 pb-12">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;