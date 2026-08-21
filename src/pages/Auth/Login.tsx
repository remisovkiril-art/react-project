import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { $api } from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await $api.post("Auth/login", { email, password });
            const { accessToken, refreshToken } = response.data;
            login(email, accessToken, refreshToken);
            navigate("/");
        } catch (err: any) {
            setError(err.response?.data?.message || "Невірний email або пароль");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4 text-black">Вхід</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
            <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-4 text-black" required />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Увійти</button>
        </form>
    );
};

