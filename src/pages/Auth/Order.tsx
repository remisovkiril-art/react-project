import { useForm, type SubmitHandler } from "react-hook-form";

type OrderFormData = {
    name: string;
    phone: string;
    address: string;
    quantity: number;
    comment: string;
};

export default function Order() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OrderFormData>();

    const onSubmit: SubmitHandler<OrderFormData> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Оформление заказа</h2>

            <label>
                Имя:
                <br />
                <input
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                        },
                    })}
                />
            </label>

            {errors.name && (
                <span>{errors.name.message}</span>
            )}

            <br />
            <br />

            <label>
                Телефон:
                <br />
                <input
                    type="tel"
                    placeholder="+380XXXXXXXXX"
                    {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                            value: /^\+380\d{9}$/,
                            message: "Phone must be in format +380XXXXXXXXX",
                        },
                    })}
                />
            </label>

            {errors.phone && (
                <span>{errors.phone.message}</span>
            )}

            <br />
            <br />

            <label>
                Адрес:
                <br />
                <input
                    type="text"
                    {...register("address", {
                        required: "Address is required",
                        minLength: {
                            value: 5,
                            message: "Address must be at least 5 characters",
                        },
                    })}
                />
            </label>

            {errors.address && (
                <span>{errors.address.message}</span>
            )}

            <br />
            <br />

            <label>
                Количество:
                <br />
                <input
                    type="number"
                    {...register("quantity", {
                        required: "Quantity is required",
                        valueAsNumber: true,
                        min: {
                            value: 1,
                            message: "Quantity must be at least 1",
                        },
                    })}
                />
            </label>

            {errors.quantity && (
                <span>{errors.quantity.message}</span>
            )}

            <br />
            <br />

            <label>
                Комментарий:
                <br />
                <textarea
                    {...register("comment")}
                />
            </label>

            {errors.comment && (
                <span>{errors.comment.message}</span>
            )}

            <br />
            <br />

            <button type="submit">
                Оформить заказ
            </button>
        </form>
    );
}