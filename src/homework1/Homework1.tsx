import CityInfo from "./components/CityInfo.tsx";
import CityInfoClass from "./components/CityInfoClass.tsx";
import BookInfo from "./components/BookInfo.tsx";
function Homework1() {
    const city = {
        city: "Дніпро",
        country: "Україна",
        year: 1776,
        photos: [
            "https://artkostyuk.com/photo/panoramas/1.jpg",
            "https://artkostyuk.com/photo/panoramas/5.jpg",
            "https://artkostyuk.com/photo/panoramas/3.jpg"
        ]
    };
    const book = {
        title: "Гаррі Поттер і філософський камінь",
        author: "Джоан Роулінг",
        genre: "Фентезі",
        pages: 320,
        reviews: [
            "Цікава книга.",
            "Легко читається.",
            "Рекомендую всім любителям пригод."
        ]
    };
    return (
        <>
            <CityInfo city={city}/>
            <hr/>
            <CityInfoClass city={city}/>
            <hr/>
            <BookInfo book={book}/>
        </>
    );
}
export default Homework1;