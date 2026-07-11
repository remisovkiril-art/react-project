import { Link, NavLink, Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: "15px", padding: "20px", background: "#eee" }}>
                <NavLink to="/">Home (Categories)</NavLink>
                <NavLink to="about">About</NavLink>
                <Link to="contacts">Contacts</Link>
            </nav>
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
