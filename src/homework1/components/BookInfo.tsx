import type {BookType} from "../types/BookType.ts";
function BookInfo(prop:{book:BookType}) {
    const {title, author, genre, pages, reviews} = prop.book;
    return (
        <>
            <h2>Улюблена книга</h2>
            <p>Назва: {title}</p>
            <p>Автор: {author}</p>
            <p>Жанр: {genre}</p>
            <p>Кількість сторінок: {pages}</p>
            <h3>Рецензії</h3>
            <ul>
                <li>{reviews[0]}</li>
                <li>{reviews[1]}</li>
                <li>{reviews[2]}</li>
            </ul>
        </>
    );
}
export default BookInfo;