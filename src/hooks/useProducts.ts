import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext"; // Убедитесь, что импорт строго отсюда!

export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts must be used inside ProductsProvider");
    }

    return context;
};
