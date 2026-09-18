import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../redux/store";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();

    const cartItems = useSelector(
        (state: RootState) => state.cart.items
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <section className="mx-auto max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Корзина
                </h1>

                <p className="mt-6 text-gray-600">
                    Корзина пуста
                </p>

                <Link
                    to="/products"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                    Перейти к товарам
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">
                    Корзина
                </h1>

                <button
                    type="button"
                    onClick={() => dispatch(clearCart())}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                    Очистить корзину
                </button>
            </div>

            <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                    <div
                        key={item.product.id}
                        className="flex items-center justify-between rounded-xl border bg-white p-4 shadow"
                    >
                        <div>
                            <h2 className="text-xl font-semibold">
                                {item.product.title}
                            </h2>

                            <p className="mt-1 text-gray-600">
                                {item.product.price} ₴
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(
                                        decreaseQuantity(
                                            item.product.id
                                        )
                                    )
                                }
                                className="h-8 w-8 rounded bg-gray-200"
                            >
                                -
                            </button>

                            <span className="w-8 text-center font-semibold">
                                {item.quantity}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(
                                        increaseQuantity(
                                            item.product.id
                                        )
                                    )
                                }
                                className="h-8 w-8 rounded bg-gray-200"
                            >
                                +
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(
                                        removeFromCart(
                                            item.product.id
                                        )
                                    )
                                }
                                className="ml-3 rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-end">
                <p className="text-2xl font-bold">
                    Итого: {total} ₴
                </p>
            </div>
        </section>
    );
};

export default Cart;

