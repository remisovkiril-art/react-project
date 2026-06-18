type MovieProps = {
    title: string;
    director: string;
    year: number;
    studio: string;
    poster: string;
}
function Movie(props: MovieProps) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            <p>Year: {props.year}</p>
            <p>Studio: {props.studio}</p>
            <img src={props.poster} width="250" />
        </>
    );
}
export default Movie;