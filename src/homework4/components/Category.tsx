import type { CategoryType } from "../types/CategoryType";

type CategoryProps = {
    category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
    const imageUrl = `${import.meta.env.VITE_PATH_TO_SERVER}${
        import.meta.env.VITE_PATH_TO_IMAGE_CATEGORIES
    }/${category.url}`;

    return (
        <article className="border p-4">
            <h2>{category.name}</h2>
            <img src={imageUrl} alt={category.name} width="160" />
            <p>Slug: {category.slug}</p>
            <p>Родительская категория: {category.parentId ?? "нет"}</p>
        </article>
    );
};

export default Category;