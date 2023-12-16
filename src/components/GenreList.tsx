import useGenre from "../hooks/useGenre";

function GenreList() {
    const { data:genres, error, isLoading } = useGenre();
    return (
        <ul>
            {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
}

export default GenreList;