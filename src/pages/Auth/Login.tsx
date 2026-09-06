//import { useState } from "react";
//import type { FormEvent } from "react";
//import { useNavigate } from "react-router-dom";
//import { $api } from "../../api/axiosInstance";
//import { useAuth } from "../../context/AuthContext";

//export const Login = () => {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    //const [error, setError] = useState("");
    //const { login } = useAuth();
    //const navigate = useNavigate();

    //const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        //e.preventDefault();
        //try {
            //const response = await $api.post("Auth/login", { email, password });
           // const { accessToken, refreshToken } = response.data;
            //login(email, accessToken, refreshToken);
            //navigate("/");
        //} catch (err: any) {
            //setError(err.response?.data?.message || "Невірний email або пароль");
        //}
    //};

    //return (
        //<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            //<h2 className="text-xl font-bold mb-4 text-black">Вхід</h2>
           // {error && <p className="text-red-500 mb-2">{error}</p>}
           // <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-2 mb-3 text-black" required />
           // <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-2 mb-4 text-black" required />
           // <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Увійти</button>
       // </form>
    //);
//};

import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { $api } from "../../api/axiosInstance";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/modal/Modal";

type LoginFormData = {
    email: string;
    password: string;
};

interface LoginProps {
    onClose?: () => void;
}

export default function Login({ onClose }: LoginProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const { login } = useAuth();
    const navigate = useNavigate();

    const closeModal = () => {
        if (onClose) {
            onClose();
        } else {
            navigate("/");
        }
    };

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            const response = await $api.post("Auth/login", {
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
                <h2>Авторизация</h2>

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

                <button type="submit">
                    Войти
                </button>
            </form>
        </Modal>
    );
}