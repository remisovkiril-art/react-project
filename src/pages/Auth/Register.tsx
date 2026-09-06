// import { useState } from "react";
// import type { FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { $api } from "../../api/axiosInstance";
// import { useAuth } from "../../context/AuthContext";
//
// export const Register = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [repeatPassword, setRepeatPassword] = useState("");
//     const [error, setError] = useState("");
//     const { login } = useAuth();
//     const navigate = useNavigate();
//
//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (password !== repeatPassword) {
//             setError("Паролі не збігаються");
//             return;
//         }
//
//         try {
//             const response = await $api.post("Auth", { email, password });
//             if (response.data?.accessToken) {
//                 login(email, response.data.accessToken);
//             }
//             navigate("/");
//         } catch (err: unknown) {
//             if (err && typeof err === "object" && "response" in err) {
//                 const axiosError = err as { response?: { data?: { message?: string } } };
//                 setError(axiosError.response?.data?.message || "Помилка реєстрації");
//             } else {
//                 setError("Помилка реєстрації");
//             }
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
//             <h2 className="text-xl font-bold mb-4 text-black">Реєстрація</h2>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
//             <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
//             <input type="password" placeholder="Повторіть пароль" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} className="w-full border p-2 mb-4 text-black" required />
//             <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Зареєструватися</button>
//         </form>
//     );
// };

import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { $api } from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/modal/Modal";

type RegisterFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

interface RegisterProps {
    onClose?: () => void;
}

export default function Register({ onClose }: RegisterProps) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const { login } = useAuth();
    const navigate = useNavigate();

    const password = watch("password");

    const closeModal = () => {
        if (onClose) {
            onClose();
        } else {
            navigate("/");
        }
    };

    const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
        try {
            const response = await $api.post("Auth", {
                email: data.email,
                password: data.password,
            });

            const { token, refreshToken } = response.data;

            login(data.email, token, refreshToken);
            closeModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal open={true} onClose={closeModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Регистрация</h2>

                <label>
                    Email:
                    <br />
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                </label>

                {errors.email && (
                    <span>{errors.email.message}</span>
                )}

                <br />
                <br />

                <label>
                    Пароль:
                    <br />
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                </label>

                {errors.password && (
                    <span>{errors.password.message}</span>
                )}

                <br />
                <br />

                <label>
                    Повторите пароль:
                    <br />
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                    />
                </label>

                {errors.confirmPassword && (
                    <span>{errors.confirmPassword.message}</span>
                )}

                <br />
                <br />

                <button type="submit">
                    Зарегистрироваться
                </button>
            </form>
        </Modal>
    );
}












