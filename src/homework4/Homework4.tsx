import { useEffect, useState } from "react";
import Category from "./components/Category";
import CreateCategoryForm from "./components/CreateCategoryForm";
import type { CategoryType } from "./types/CategoryType";

const Homework4 = () => {
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
                    throw new Error("Не удалось получить категории");
                }

                const data: CategoryType[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
                setError("Не удалось загрузить категории.");
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);

    const addCategoryToList = (newCategory: CategoryType) => {
        setCategories((currentCategories) => [...currentCategories, newCategory]);
    };

    return (
        <main>
            <h1>Домашняя работа 4: категории</h1>
            <CreateCategoryForm onCategoryCreated={addCategoryToList} />

            <h2>Список категорий</h2>
            {isLoading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}

            <div>
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </main>
    );
};

export default Homework4;;