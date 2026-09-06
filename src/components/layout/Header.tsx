import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../../pages/Search.tsx";
import { useAuth } from "../../context/AuthContext";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

const Header = () => {
    const { isAuth, userEmail, logout } = useAuth();
    const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);

    const menu = [
        { title: "Home", path: "/" },
        { title: "Categories", path: "/categories" },
        { title: "Products", path: "/products" },
        { title: "About", path: "/about" },
        { title: "Contacts", path: "/contacts" }
    ];

    return (
        <>
            <header className="bg-slate-900 text-white shadow-lg">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-wide"
                    >
                        MyShop
                    </NavLink>

                    <nav className="flex gap-6">
                        {menu.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `transition hover:text-blue-400 ${
                                        isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Search />

                        {isAuth ? (
                            <div className="flex items-center gap-3">
                                <span className="text-green-400 text-sm font-medium">
                                    Welcome, {userEmail}
                                </span>

                                <button
                                    onClick={logout}
                                    className="bg-red-600 hover:bg-red-700 text-xs px-3 py-1.5 rounded transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2 text-sm">
                                <button
                                    type="button"
                                    onClick={() => setAuthModal("login")}
                                    className="hover:text-blue-400"
                                >
                                    Login
                                </button>

                                <span>|</span>

                                <button
                                    type="button"
                                    onClick={() => setAuthModal("register")}
                                    className="hover:text-blue-400"
                                >
                                    Register
                                </button>
                            </div>
                        )}

                        <button>❤️</button>

                        <button className="relative">
                            🛒
                            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
                                3
                            </span>
                        </button>

                        <button>👤</button>
                    </div>
                </div>
            </header>

            {authModal === "login" && (
                <Login onClose={() => setAuthModal(null)} />
            )}

            {authModal === "register" && (
                <Register onClose={() => setAuthModal(null)} />
            )}
        </>
    );
};

export default Header;