import { useState, type FormEvent } from "react";
import type { CategoryType } from "../types/CategoryType";

type CreateCategoryFormProps = {
    onCategoryCreated: (category: CategoryType) => void;
};

const CreateCategoryForm = ({ onCategoryCreated }: CreateCategoryFormProps) => {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [parentId, setParentId] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [isSending, setIsSending] = useState(false);

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!image) {
            setError("Выберите изображение категории.");
            return;
        }

        setError("");
        setIsSending(true);

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Slug", slug);
        formData.append("Image", image);

        if (parentId) {
            formData.append("ParentId", parentId);
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}Category`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Сервер не смог создать категорию");
            }

            const createdCategory: CategoryType = await response.json();
            onCategoryCreated(createdCategory);
            setName("");
            setSlug("");
            setParentId("");
            setImage(null);
        } catch (error) {
            console.error(error);
            setError("Не удалось создать категорию. Проверьте API.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={submitForm} className="border p-4">
            <h1>Добавить категорию</h1>

            <p>
                <label>
                    Название
                    <input
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
            </p>

            <p>
                <label>
                    Slug
                    <input
                        required
                        value={slug}
                        onChange={(event) => setSlug(event.target.value)}
                    />
                </label>
            </p>

            <p>
                <label>
                    Родительская категория (необязательно)
                    <input
                        type="number"
                        value={parentId}
                        onChange={(event) => setParentId(event.target.value)}
                    />
                </label>
            </p>

            <p>
                <label>
                    Изображение
                    <input
                        required
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                            setImage(event.target.files?.[0] ?? null)
                        }
                    />
                </label>
            </p>

            <button type="submit" disabled={isSending}>
                {isSending ? "Создание..." : "Создать категорию"}
            </button>

            {error && <p>{error}</p>}
        </form>
    );
};

export default CreateCategoryForm;