import { createBrowserRouter } from "react-router";
import Layout from "@/practice3/components/Layout";
import CategoriesList from "@/practice3/components/CategoriesList";
import CategoryPage from "@/practice3/components/CategoryPage";
import Contacts from "@/practice3/components/Contacts";
import ProductsPage from "@/practice3/components/ProductsPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <CategoriesList /> },
            { path: "products", element: <ProductsPage /> },
            { path: "contacts", element: <Contacts /> },
            { path: "categories/:id", element: <CategoryPage /> },
        ],
    },
]);