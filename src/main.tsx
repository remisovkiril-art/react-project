{/*import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { ProductsProvider } from "@/context/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductsProvider>
        <RouterProvider router={routes} />
    </ProductsProvider>
);
*/}



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

