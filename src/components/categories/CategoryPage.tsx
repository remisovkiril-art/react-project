import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CategoryType } from "@/types/CategoryType";

const CategoryPage = () => {
    const { id } = useParams<{ id: string }>();
    const [category, setCategory] = useState<CategoryType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadCategory = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}Category/${id}`
                );

                if (!response.ok) {
                    throw new Error("Категория не найдена");
                }

                const data: CategoryType = await response.json();
                setCategory(data);
            } catch (error) {
                console.error(error);
                setCategory(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadCategory();
    }, [id]);

    if (isLoading) {
        return <p className="p-6 text-center text-gray-500">Загрузка категории...</p>;
    }

    if (!category) {
        return (
            <section className="mx-auto mt-10 max-w-xl rounded-xl border bg-white p-8 text-center shadow-md">
                <h1 className="text-2xl font-bold text-gray-800">Категория не найдена</h1>
                <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
                    Вернуться к категориям
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto mt-10 max-w-xl rounded-xl border bg-white p-8 text-center shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
            <p className="mt-4 text-gray-600">Вы открыли страницу выбранной категории.</p>
            <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
                Вернуться к категориям
            </Link>
        </section>
    );
};

export default CategoryPage;