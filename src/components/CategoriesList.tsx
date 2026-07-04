import { useEffect, useState } from "react";

type CategoryType = {
    id: number;
    name: string;
    slug: string;
    url: string;
    parentId: null | number;
};

const CategoriesList = () => {
    const URL = "http://localhost:5157/api/v1/Category";
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <div>
            {categories.length === 0 ? "List is empty" : null}

            {categories.map((category) => (
                <div key={category.id}>
                    <p>ID: {category.id}</p>
                    <p>Name: {category.name}</p>
                    <p>Slug: {category.slug}</p>
                    <p>URL: {category.url}</p>
                    <p>Parent ID: {category.parentId}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default CategoriesList;












