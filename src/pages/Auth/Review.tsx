import { useForm, type SubmitHandler } from "react-hook-form";

type ReviewFormData = {
    name: string;
    rating: number;
    text: string;
};

export default function Review() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ReviewFormData>();

    const onSubmit: SubmitHandler<ReviewFormData> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Отзыв о товаре</h2>

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
                Оценка:
                <br />
                <input
                    type="number"
                    {...register("rating", {
                        required: "Rating is required",
                        valueAsNumber: true,
                        min: {
                            value: 1,
                            message: "Rating must be at least 1",
                        },
                        max: {
                            value: 5,
                            message: "Rating cannot be more than 5",
                        },
                    })}
                />
            </label>

            {errors.rating && (
                <span>{errors.rating.message}</span>
            )}

            <br />
            <br />

            <label>
                Отзыв или вопрос:
                <br />
                <textarea
                    {...register("text", {
                        required: "Review or question is required",
                        minLength: {
                            value: 10,
                            message: "Text must be at least 10 characters",
                        },
                    })}
                />
            </label>

            {errors.text && (
                <span>{errors.text.message}</span>
            )}

            <br />
            <br />

            <button type="submit">
                Отправить
            </button>
        </form>
    );
}