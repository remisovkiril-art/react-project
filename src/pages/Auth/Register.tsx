import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { $api } from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            setError("Паролі не збігаються");
            return;
        }

        try {
            const response = await $api.post("Auth", { email, password });
            if (response.data?.accessToken) {
                login(email, response.data.accessToken);
            }
            navigate("/");
        } catch (err: unknown) {
            if (err && typeof err === "object" && "response" in err) {
                const axiosError = err as { response?: { data?: { message?: string } } };
                setError(axiosError.response?.data?.message || "Помилка реєстрації");
            } else {
                setError("Помилка реєстрації");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4 text-black">Реєстрація</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
            <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
            <input type="password" placeholder="Повторіть пароль" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} className="w-full border p-2 mb-4 text-black" required />
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Зареєструватися</button>
        </form>
    );
};
