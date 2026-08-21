import ProductsList from "./ProductsList";
import { useProducts } from "@/hooks/useProducts";

const ProductsPage = () => {
    const { products, isLoading } = useProducts();

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
                <p style={{ fontSize: "18px", color: "#666" }}>Загрузка продуктов...</p>
            </div>
        );
    }

    return <ProductsList products={products} />;
};

export default ProductsPage;
