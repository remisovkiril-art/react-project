import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";

const Homework5Page = lazy(() => import("./homework5/Homework5Page"));
const CategoriesList = lazy(() => import("./components/categories/CategoriesList"));
const CategoryPage = lazy(() => import("./components/categories/CategoryPage"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));
const About = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./components/product/ProductsPage"));
const Login = lazy(() => import("./pages/Auth/Login").then(module => ({ default: module.Login })));
const Register = lazy(() => import("./pages/Auth/Register").then(module => ({ default: module.Register })));

const PageLoader = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px" }}>
        <p style={{ fontSize: "18px", color: "#666" }}>Загрузка страницы...</p>
    </div>
);

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} errorElement={<Error />}>
                <Route path="login" element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
                <Route path="register" element={<Suspense fallback={<PageLoader />}><Register /></Suspense>} />
                <Route index element={<Suspense fallback={<PageLoader />}><CategoriesList /></Suspense>} />
                <Route path="categories" element={<Suspense fallback={<PageLoader />}><CategoriesList /></Suspense>} />
                <Route path="products" element={<Suspense fallback={<PageLoader />}><ProductsPage /></Suspense>} />
                <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
                <Route path="contacts" element={<Suspense fallback={<PageLoader />}><Contacts /></Suspense>} />
                <Route path="categories/:id" element={<Suspense fallback={<PageLoader />}><CategoryPage /></Suspense>} />
                <Route path="homework5" element={<Suspense fallback={<PageLoader />}><Homework5Page /></Suspense>} />
            </Route>
        </Routes>
    );
};

export default App;

