import { NavLink } from "react-router";

const Menu = () => {
    const linkStyles = ({ isActive }: { isActive: boolean }) =>
        `rounded-lg px-4 py-2 font-medium transition-colors ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`;

    return (
        <nav className="mb-6 border-b border-gray-200 bg-white py-4 shadow-md">
            <div className="container mx-auto flex justify-center gap-3">
                <NavLink to="/" end className={linkStyles}>
                    Categories
                </NavLink>
                <NavLink to="/products" className={linkStyles}>
                    Products
                </NavLink>
                <NavLink to="/contacts" className={linkStyles}>
                    Contacts
                </NavLink>
            </div>
        </nav>
    );
};

export default Menu;
