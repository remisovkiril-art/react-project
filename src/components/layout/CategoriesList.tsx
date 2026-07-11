import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import type { CategoryType } from "@/types/CategoryType";
import Category from "../Category";

const CategoriesList = () => {
    const URL: string = `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}Category`;
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data: CategoryType[]) => {
                setCategories(data);
            });
    }, [URL]);

    if (categories.length === 0) {
        return (
            <p className="text-center text-gray-500 text-lg mt-10">
                List is empty
            </p>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4">
            <nav style={{ display: "flex", gap: "15px", padding: "20px 0" }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <Link to="/contacts">Contacts</Link>
            </nav>

            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
};

export default CategoriesList;


