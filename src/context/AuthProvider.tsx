import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userEmail, setUserEmail] = useState<string | null>(() => {
        return localStorage.getItem("userEmail");
    });

    const [isAuth, setIsAuth] = useState<boolean>(() => {
        return !!localStorage.getItem("accessToken");
    });

    const login = (email: string, accessToken: string, refreshToken?: string) => {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userEmail", email);
        if (refreshToken) {
            localStorage.setItem("refreshToken", refreshToken);
        }
        setUserEmail(email);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userEmail");
        setUserEmail(null);
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ userEmail, isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
