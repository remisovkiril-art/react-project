import ProductCard from "./ProductCard";
import type { ProductType } from "./types/ProductType";
const Homework3 = () => {
    const products: ProductType[] = [
        {
            id: 1,
            title: "Esperanza EH187K Black",
            price: 229,
            discount: 5,
            image: "https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/import/7282116923975619.webp"
        },
        {
            id: 2,
            title: "Canyon GTWS2 Orange",
            price: 549,
            discount: 10,
            image: "https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/c/n/cnd-gtws2o_.webp"
        }
    ];
    return (
        <>
            <h1>Wireless Earbuds</h1>
            {
                products.map(product =>
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                )
            }
        </>
    );
}
export default Homework3;