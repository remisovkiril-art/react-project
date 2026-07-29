import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Search from "./Search";

type CategoryType = {
    id: number;
    name: string;
    parentId: number | null;
    url?: string;
};

const Homework5Page = () => {
    const [allCategories, setAllCategories] = useState<CategoryType[]>([]);
    const [currentParentId, setCurrentParentId] = useState<number | null>(null);
    const [history, setHistory] = useState<(number | null)[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") || "";

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}Category`
                );
                if (!response.ok) throw new Error("Ошибка загрузки");
                const data: CategoryType[] = await response.json();
                setAllCategories(data);
            } catch {
                setError("Не удалось загрузить категории");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    const displayedCategories = allCategories.filter((c) => {
        if (searchQuery.trim() !== "") {
            return c.name.toLowerCase().includes(searchQuery.toLowerCase());
        }

        if (currentParentId === null) {
            return c.parentId === null || c.parentId === 0;
        }

        return c.parentId === currentParentId;
    });

    const handleCategoryClick = (category: CategoryType) => {
        const hasSubcategories = allCategories.some((c) => c.parentId === category.id);

        if (hasSubcategories) {
            setHistory([...history, currentParentId]);
            setCurrentParentId(category.id);
        } else {
            navigate(`/categories/${category.id}`);
        }
    };

    const handleBackClick = () => {
        if (history.length === 0) return;
        const previousParentId = history[history.length - 1];
        setHistory(history.slice(0, -1));
        setCurrentParentId(previousParentId);
    };

    return (
        <div>
            <h1>Категории товаров (ДЗ 5)</h1>

            <Search />

            {currentParentId !== null && searchQuery.trim() === "" && (
                <button onClick={handleBackClick} style={{ marginTop: "10px", marginBottom: "10px" }}>
                    Назад на один уровень
                </button>
            )}

            {displayedCategories.length === 0 ? (
                <div>Категорий не найдено</div>
            ) : (
                <ul>
                    {displayedCategories.map((category) => (
                        <li key={category.id} style={{ margin: "10px 0" }}>
                            <button onClick={() => handleCategoryClick(category)}>
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Homework5Page;
