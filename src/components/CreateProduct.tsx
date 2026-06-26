import type {ProductType} from "../types/ProductType.ts";
import {type ChangeEvent, type SubmitEvent, useState} from "react";

type CreateProductProps = {
    products: ProductType[];
    addProduct: (products: ProductType[]) => void;
}

const CreateProduct = ({products, addProduct}: CreateProductProps) => {

    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [id_category, setIdCategory] = useState<number>(0);
    const [is_active, setIsActive] = useState<boolean>(false);

    const handlerSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const product: ProductType = {
            id: products.length + 1,
            title: title,
            price: price,
            image: image,
            count: count,
            id_category: id_category,
            is_active: is_active
        };

        addProduct([...products, product]);

        setTitle("");
        setPrice(0);
        setImage("");
        setCount(0);
        setIdCategory(0);
        setIsActive(false);
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handlerSubmit}
                className="flex flex-col w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-4"
            >
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Назва товару
                    </label>
                    <input
                        type="text"
                        value={title}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Ціна
                    </label>
                    <input
                        type="number"
                        min="0"
                        value={price}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPrice(+e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Зображення
                    </label>
                    <input
                        type="text"
                        value={image}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setImage(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Кількість
                    </label>
                    <input
                        type="number"
                        min="0"
                        value={count}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setCount(+e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Категорія
                    </label>
                    <select
                        value={id_category}
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                            setIdCategory(+e.target.value)
                        }}
                    >
                        <option value="0">Оберіть категорію</option>
                        <option value="1">Ноутбуки</option>
                        <option value="2">Смартфони</option>
                        <option value="3">Навушники</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={is_active}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setIsActive(e.target.checked)
                        }}
                    />
                    <label>
                        Активний товар
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg"
                >
                    Створити товар
                </button>
            </form>
        </div>
    )
}

export default CreateProduct;