import ProductsList from "@/components/ProductsList";
import { useProducts } from "@/hooks/useProducts";

const ProductsPage = () => {
    const { products } = useProducts();

    return <ProductsList products={products} />;
};

export default ProductsPage;