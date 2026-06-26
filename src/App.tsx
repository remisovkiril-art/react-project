import './App.css'
import ProductsList from "./components/ProductsList.tsx";
import CreateProduct from "./components/CreateProduct.tsx";
import productData from "./models/products.ts"
import {useState} from "react";

function App() {
    const [products, setProducts] = useState(productData);
    return (
        <>
            <ProductsList products={products}/>
            <CreateProduct
                products={products}
                addProduct={setProducts}
            />
        </>
    )
}

export default App;

















