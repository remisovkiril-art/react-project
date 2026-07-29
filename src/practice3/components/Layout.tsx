import { Outlet } from "react-router-dom"; // Строго -dom на конце!
import Menu from "./Menu";

const Layout = () => {
    return (
        <div>
            <Menu />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
