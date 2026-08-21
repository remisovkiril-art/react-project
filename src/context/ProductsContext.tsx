import { createContext } from "react";
import type { ProductType } from "../types/ProductType";

interface ProductsContextType {
    products: ProductType[];
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    isLoading: boolean;
}

export const ProductsContext = createContext<ProductsContextType | null>(null);
