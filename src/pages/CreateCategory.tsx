import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { $api } from "../api/axiosInstance";
import type { CategoryType } from "../types/CategoryType";

type CategoryFormData = {
    name: string;
    slug: string;
    parentId: string;
    image: FileList;
};

export default function CreateCategory() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryFormData>();

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await $api.get("Category");
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        loadCategories();
    }, []);

    const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
        try {
            setError("");

            const formData = new FormData();

            formData.append("Name", data.name);
            formData.append("Slug", data.slug);

            if (data.parentId !== "0") {
                formData.append("ParentId", data.parentId);
            }

            if (data.image && data.image.length > 0) {
                formData.append("Image", data.image[0]);
            }

            await $api.post("Category", formData);

            navigate("/categories");
        } catch (error) {
            console.error(error);
            setError("Не удалось создать категорию");
        }
    };

    return (
        <section className="mx-auto max-w-xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 rounded-xl bg-white p-8 shadow-lg"
            >
                <h1 className="text-2xl font-bold">
                    Создание категории
                </h1>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Название
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("name", {
                            required: "Название обязательно",
                            minLength: {
                                value: 2,
                                message: "Название должно содержать минимум 2 символа",
                            },
                        })}
                    />

                    {errors.name && (
                        <span className="text-sm text-red-500">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Slug
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border px-3 py-2"
                        placeholder="smartphones"
                        {...register("slug", {
                            required: "Slug обязателен",
                        })}
                    />

                    {errors.slug && (
                        <span className="text-sm text-red-500">
                            {errors.slug.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Родительская категория
                    </label>

                    <select
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("parentId")}
                        defaultValue="0"
                    >
                        <option value="0">
                            Без родительской категории
                        </option>

                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Изображение
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("image")}
                    />
                </div>

                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
                >
                    Создать категорию
                </button>
            </form>
        </section>
    );
}

