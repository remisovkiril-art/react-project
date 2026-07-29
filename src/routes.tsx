// import { createBrowserRouter } from "react-router";
// import Layout from "@/practice3/components/Layout";
// import CategoriesList from "@/practice3/components/CategoriesList";
// import CategoryPage from "@/practice3/components/CategoryPage";
// import Contacts from "@/practice3/components/Contacts";
// import ProductsPage from "@/practice3/components/ProductsPage";
//
// export const routes = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             { index: true, element: <CategoriesList /> },
//             { path: "products", element: <ProductsPage /> },
//             { path: "contacts", element: <Contacts /> },
//             { path: "categories/:id", element: <CategoryPage /> },
//         ],
//     },
// ]);


import { createBrowserRouter } from "react-router-dom";
import Homework5Page from "./homework5/Homework5Page";
import Layout from "./components/layout/Layout";
import CategoriesList from "./components/categories/CategoriesList";
import CategoryPage from "./components/categories/CategoryPage";
import Contacts from "./components/contacts/Contacts";
import ProductsPage from "./components/product/ProductsPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <CategoriesList />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "contacts",
                element: <Contacts />
            },
            {
                path: "categories/:id",
                element: <CategoryPage />
            },
            {
                path: "homework5",
                element: <Homework5Page />
            }
        ]
    }
]);





