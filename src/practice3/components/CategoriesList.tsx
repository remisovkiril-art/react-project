import { useEffect, useState } from "react";
import type { CategoryType } from "@/types/CategoryType";
import Category from "./Category2";

const CategoriesList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}Category`
                );

                if (!response.ok) {
                    throw new Error("Не удалось загрузить категории");
                }

                const data: CategoryType[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
                setError("Не удалось загрузить категории, проверьте, запущен ли сервер");
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);

    if (isLoading) {
        return <p className="p-6 text-center text-gray-500">Загрузка категорий...</p>;
    }

    if (error) {
        return <p className="p-6 text-center text-red-500">{error}</p>;
    }

    if (categories.length === 0) {
        return <p className="p-6 text-center text-gray-500">Категорий пока нет</p>;
    }

    return (
        <section>
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Все категории</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
};

export default CategoriesList;