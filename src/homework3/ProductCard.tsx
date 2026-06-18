import { useState } from "react";
import type { ProductType } from "./types/ProductType";
import Button from "./ui/Button";

type ProductProp = {
    product: ProductType;
}

const ProductCard = ({ product }: ProductProp) => {

    const [rating, setRating] = useState(0);

    return (
        <>
            <img
                src={product.image}
                alt={product.title}
                width="200"
            />

            <h3>{product.title}</h3>

            <p>Price: {product.price} ₴</p>

            <p>Discount: {product.discount}%</p>

            <div>
                <button onClick={() => setRating(1)}>
                    {rating >= 1 ? "\u2605" : "\u2606"}
                </button>

                <button onClick={() => setRating(2)}>
                    {rating >= 2 ? "\u2605" : "\u2606"}
                </button>

                <button onClick={() => setRating(3)}>
                    {rating >= 3 ? "\u2605" : "\u2606"}
                </button>

                <button onClick={() => setRating(4)}>
                    {rating >= 4 ? "\u2605" : "\u2606"}
                </button>

                <button onClick={() => setRating(5)}>
                    {rating >= 5 ? "\u2605" : "\u2606"}
                </button>
            </div>

            <button>
                {"\u2661"}
            </button>

            <Button text={"\uD83D\uDED2"} />

            <hr />
        </>
    );
}

export default ProductCard;