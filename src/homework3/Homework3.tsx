import ProductCard from "./ProductCard";
import Search from "./ui/Search";
import { useSearch } from "../hooks/useSearch";
import type { ProductType } from "./types/ProductType";

const Homework3 = () => {
    const { searchQuery } = useSearch();
    const products: ProductType[] = [
        {
            id: 1,
            title: "Смарт-годинник DMI Watch 6 Чорний",
            price: 12999,
            discount: 0,
            image: "DMI Watch 6.png"
        },
        {
            id: 2,
            title: "Годинник Xiaomi Watch S1 Чорний",
            price: 5999,
            discount: 5,
            image: "Xiaomi Watch S1.png"
        },
        {
            id: 3,
            title: "Apple Watch SE 2 GPS 40mm Starlight",
            price: 13899,
            discount: 5,
            image: "Apple Watch SE 2 GPS 40mm Starlight.png"
        }
    ];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery)
    );

    return (
        <>
            <h1>Пошук продуктів</h1>
            <Search />

            {filteredProducts.length === 0 ? (
                <p>Нічого не знайдено</p>
            ) : (
                filteredProducts.map(product =>
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                )
            )}
        </>
    );
};

export default Homework3;
