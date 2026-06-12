import {type ChangeEvent, useState} from "react";
import type {ProductType} from "../types/ProductType.ts";

const Product = ()=>{
    const[product, setProduct] = useState<ProductType>({
        title : "Bread",
        price : 35
    })
    function changeTitle(e:ChangeEvent<HTMLInputElement>) {
        setProduct({...product, title:e.target.value})
    }
    function changePrice(e:ChangeEvent<HTMLInputElement>) {
        setProduct({...product, price:+e.target.value})
    }
    return (
        <>
            <h3>Product</h3>
            <p>Title: {product.title} Price: {product.price}</p>
            <hr/>
            Title:  <input type="text" value={product.title} onChange={changeTitle} />
            <br/>
            Price: <input type="number" value={product.price} onChange={changePrice}/>
        </>
    )
}
export default Product
