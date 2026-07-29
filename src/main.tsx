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


import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ProductsProvider } from "./context/ProductsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductsProvider>
        <RouterProvider router={routes} />
    </ProductsProvider>
);