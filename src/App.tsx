import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./context/AuthProvider";
import { ProductsProvider } from "./context/ProductsProvider";

const Loading = () => {
    return <div>Загрузка страницы...</div>;
};

const App = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        return routes.subscribe((state) => {
            setIsLoading(state.navigation.state === "loading");
        });
    }, []);

    return (
        <AuthProvider>
            <ProductsProvider>
                {isLoading && <Loading />}
                <RouterProvider router={routes} />
            </ProductsProvider>
        </AuthProvider>
    );
};

export default App;