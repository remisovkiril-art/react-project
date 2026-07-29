import ProductsList from "./ProductsList";
import { useProducts } from "@/hooks/useProducts";

const ProductsPage = () => {
    const { products } = useProducts();

    return <ProductsList products={products} />;
};

export default ProductsPage;