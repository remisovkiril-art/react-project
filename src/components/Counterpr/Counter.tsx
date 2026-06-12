import { useState } from "react";
import style from "./Counter.module.css";
const Counter = () => {
    const [value, setValue] = useState<number>(50);
    return (
        <>
            <p className={style.counter}>
                Value:{" "}
                {value === 0 || value === 100 ? (
                    <b className={style.red}>{value}</b>
                ) : (
                    <span>{value}</span>
                )}
            </p>
            <button
                className={value === 0 ? style.off : ""}
                onClick={(): void => {
                    if (value > 0) {
                        setValue(value - 10);
                    }
                }}> - Down
            </button>
            <button
                className={value === 100 ? style.off : ""}
                onClick={(): void => {
                    if (value < 100) {
                        setValue(value + 10);
                    }
                }}> + Up
            </button>
        </>
    );
};

export default Counter;
