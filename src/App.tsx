import { useRef } from 'react';
import './App.css';
function App() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleFocusEmail = () => {
        emailRef.current?.focus();
    };
    const handleClearFields = () => {
        if (nameRef.current && emailRef.current) {
            nameRef.current.value = "";
            emailRef.current.value = "";
        }
    };
    return(
        <>
            <div>
                <label>Поле Ім'я: </label>
                <input ref={nameRef} type="text" />
            </div>
            <div>
                <label>Поле Email: </label>
                <input ref={emailRef} type="email" />
            </div>
            <button onClick={handleFocusEmail}>Перейти к Email</button>
            <button onClick={handleClearFields}>Очистить все поля</button>
        </>
    );
}
export default App;


/*import Homework1 from "./homework1/Homework1.tsx";

function App() {
    return (
        <>
            <Homework1/>
        </>
    );
}

export default App;*/

/*import Movie from "./homework2/Movie";

function App() {
    return (
        <Movie
            title="Avatar"
            director="James Cameron"
            year={2009}
            studio="20th Century Fox"
            poster="https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg"
        />
    );
}

export default App;*/

/*import Person from "./homework2/Person";

function App() {
    return (
        <Person
            fullName="Ivan Petrenko"
            phone="+380991112233"
            email="ivan@gmail.com"
            city="Kyiv"
            skills="React, TypeScript"
            photo="https://picsum.photos/250"
        />
    );
}

export default App;*/


/*import Homework3 from "./homework3/Homework3";

function App() {
    return (
        <>
            <Homework3 />
        </>
    );
}

export default App;*/