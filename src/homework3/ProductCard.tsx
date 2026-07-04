import { useState } from "react";
import type { ProductType, CartItemType } from "./types/ProductType";
import Button from "./ui/Button";

type ProductProp = {
    product: ProductType;
};

const ProductCard = ({ product }: ProductProp) => {
    const [rating, setRating] = useState(0);
    const handleAddToFavorites = () => {
        const favoritesRaw = localStorage.getItem("favorites");
        const favorites: ProductType[] = favoritesRaw ? JSON.parse(favoritesRaw) : [];
        const exists = favorites.some((item) => item.id === product.id);

        if (!exists) {
            favorites.push(product);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    };
    const handleAddToCart = () => {
        const cartRaw = localStorage.getItem("cart");
        const cart: CartItemType[] = cartRaw ? JSON.parse(cartRaw) : [];
        const productIndex = cart.findIndex((item) => item.id === product.id);

        if (productIndex !== -1) {
            cart[productIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <img src={product.image} alt={product.title} width="200" />
            <h3>{product.title}</h3>
            <p>Price: {product.price} ₴</p>
            <p>Discount: {product.discount}%</p>
            <div style={{ marginBottom: "10px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setRating(star)}>
                        {rating >= star ? "\u2605" : "\u2606"}
                    </button>
                ))}
            </div>
            <button onClick={handleAddToFavorites} style={{ marginRight: "10px" }}>
                В избранное
            </button>

            <Button text="В корзину" onClick={handleAddToCart} />
            <hr />
        </div>
    );
};

export default ProductCard;
