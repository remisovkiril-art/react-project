import Product from "./Product.tsx";
import type {ProductType} from "../types/ProductType.ts";
type ProductsProps = {
    products: ProductType[];
}
const ProductsList = ({products}:ProductsProps) => {
    return (<div className="flex p-8">{products.map(product=>{
        return (<Product key={product.id} product={product}/>)
    })}</div>)
}
export default ProductsList