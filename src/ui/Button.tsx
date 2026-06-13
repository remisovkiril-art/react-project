type ButtonProp = {
    text: string;
}

const Button = ({ text }: ButtonProp) => {
    return (
        <button className="bg-blue-600 text-white font-bold py-2 px-4 m-4 rounded-lg text-lg shadow-md">
            {text}
        </button>
    );
};

export default Button;