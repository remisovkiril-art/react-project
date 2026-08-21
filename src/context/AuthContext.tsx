import { createContext, useContext } from "react";

interface AuthContextType {
    userEmail: string | null;
    isAuth: boolean;
    login: (email: string, accessToken: string, refreshToken?: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};
