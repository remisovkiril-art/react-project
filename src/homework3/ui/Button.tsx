type ButtonProp = {
    text: string;
}

const Button = ({ text }: ButtonProp) => {
    return (
        <button>
            {text}
        </button>
    );
};

export default Button;