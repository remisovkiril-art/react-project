import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ErrorPage from "./pages/Error";

const categoriesLoader = async () => {
    return null;
};

const productsLoader = async () => {
    return null;
};

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "login",
                lazy: () =>
                    import("./pages/Auth/Login").then(m => ({
                        Component: m.Login
                    }))
            },
            {
                path: "register",
                lazy: () =>
                    import("./pages/Auth/Register").then(m => ({
                        Component: m.Register
                    }))
            },
            {
                index: true,
                loader: categoriesLoader,
                lazy: () =>
                    import("./components/categories/CategoriesList").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "categories",
                loader: categoriesLoader,
                lazy: () =>
                    import("./components/categories/CategoriesList").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "products",
                loader: productsLoader,
                lazy: () =>
                    import("./components/product/ProductsPage").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "about",
                lazy: () =>
                    import("./pages/About").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "contacts",
                lazy: () =>
                    import("./components/contacts/Contacts").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "categories/:id",
                lazy: () =>
                    import("./components/categories/CategoryPage").then(m => ({
                        Component: m.default
                    }))
            },
            {
                path: "homework5",
                lazy: () =>
                    import("./homework5/Homework5Page").then(m => ({
                        Component: m.default
                    }))
            }
        ]
    }
]);