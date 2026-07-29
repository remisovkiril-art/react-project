import type { CategoryType } from "@/types/CategoryType";

type CategoryProps = {
    category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
    const imageUrl = `${import.meta.env.VITE_PATH_TO_SERVER}${
        import.meta.env.VITE_PATH_TO_IMAGE_CATEGORIES
    }/${category.url}`;

    return (
        <a
            href={`/categories/${category.id}`}
            className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl"
        >
            <img
                src={imageUrl}
                alt={category.name}
                className="h-52 w-full bg-gray-50 object-contain"
            />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                <p className="mt-2 text-sm text-gray-600">Переглянути категорію</p>
            </div>
        </a>
    );
};

export default Category;