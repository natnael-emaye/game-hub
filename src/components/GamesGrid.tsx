import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GamesGrid() {
    const { error, games } = useGames();
    console.log(error);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
}
