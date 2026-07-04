type ButtonProp = {
    text: string;
    onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProp) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
