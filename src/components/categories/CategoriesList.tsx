import { useEffect, useState } from "react";
import type { CategoryType } from "../../types/CategoryType";
import Category from "./Category";

const CategoriesList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

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
            } catch {
                setError("Не удалось загрузить категории, проверьте, запущен ли сервер");
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
                <p style={{ fontSize: "18px", color: "#666" }}>Загрузка категорий...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
                <p>{error}</p>
            </div>
        );
    }

    if (categories.length === 0) {
        return <p>Категорий пока нет</p>;
    }

    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(categories.length / pageSize);

    return (
        <section style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Все категории</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {currentItems.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>

            <div style={{ marginTop: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                >
                    Назад
                </button>

                <span>Страница {currentPage} из {totalPages}</span>

                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                >
                    Вперед
                </button>
            </div>
        </section>
    );
};

export default CategoriesList;
