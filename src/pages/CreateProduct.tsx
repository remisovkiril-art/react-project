import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { $api } from "../api/axiosInstance";
import type { CategoryType } from "../types/CategoryType";

type ProductFormData = {
    name: string;
    description: string;
    price: number;
    stockQty: number;
    categoryId: string;
    images: FileList;
};

export default function CreateProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>();

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

    const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
        try {
            setError("");

            const formData = new FormData();

            formData.append("Name", data.name);
            formData.append("Description", data.description);
            formData.append("Price", data.price.toString());
            formData.append("StockQty", data.stockQty.toString());
            formData.append("CategoryId", data.categoryId);

            if (data.images && data.images.length > 0) {
                for (let i = 0; i < data.images.length; i++) {
                    formData.append("Images", data.images[i]);
                }
            }

            await $api.post("Product", formData);

            navigate("/products");
        } catch (error) {
            console.error(error);
            setError("Не удалось создать продукт");
        }
    };

    return (
        <section className="mx-auto max-w-xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 rounded-xl bg-white p-8 shadow-lg"
            >
                <h1 className="text-2xl font-bold">
                    Создание продукта
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
                        Описание
                    </label>

                    <textarea
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("description")}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Цена
                    </label>

                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("price", {
                            required: "Цена обязательна",
                            valueAsNumber: true,
                            min: {
                                value: 0.01,
                                message: "Цена должна быть больше 0",
                            },
                        })}
                    />

                    {errors.price && (
                        <span className="text-sm text-red-500">
                            {errors.price.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Количество
                    </label>

                    <input
                        type="number"
                        min="0"
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("stockQty", {
                            required: "Количество обязательно",
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: "Количество не может быть отрицательным",
                            },
                        })}
                    />

                    {errors.stockQty && (
                        <span className="text-sm text-red-500">
                            {errors.stockQty.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Категория
                    </label>

                    <select
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("categoryId", {
                            required: "Выберите категорию",
                            validate: (value) =>
                                value !== "0" || "Выберите категорию",
                        })}
                        defaultValue="0"
                    >
                        <option value="0">
                            Выберите категорию
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

                    {errors.categoryId && (
                        <span className="text-sm text-red-500">
                            {errors.categoryId.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Изображения
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="w-full rounded-lg border px-3 py-2"
                        {...register("images")}
                    />

                    <p className="mt-1 text-sm text-gray-500">
                        Можно выбрать несколько изображений, максимум 5.
                    </p>
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
                    Создать продукт
                </button>
            </form>
        </section>
    );
}

