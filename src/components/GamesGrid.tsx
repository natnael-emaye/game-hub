import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GamesGrid() {
    const { error, games, isLoading } = useGames();
    // const arr = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl:5,
                }}
                padding="10px"
                spacing={10}
            >
               
                {games.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </SimpleGrid>
        </>
    );
}
