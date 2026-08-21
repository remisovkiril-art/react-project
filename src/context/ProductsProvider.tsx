import { useState, useEffect, type ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";
import productsData from "../models/products";
import type { ProductType } from "../types/ProductType";

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 800));
                setProducts(productsData);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, setProducts, isLoading }}>
            {children}
        </ProductsContext.Provider>
    );
};
