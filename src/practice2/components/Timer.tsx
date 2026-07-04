import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => (prev >= 60 ? 0 : prev + 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Таймер: {seconds} сек.</h2>
        </div>
    );
};

export default Timer;
