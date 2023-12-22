import { Heading, SimpleGrid } from "@chakra-ui/react";
import useGames, { PlatformProps } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Prop {
    selectedPlatform: PlatformProps | null;
    selectedGenre: Genre | null;
}

export default function GamesGrid({ selectedPlatform, selectedGenre }: Prop) {
    const {
        data: games,
        error,
        isLoading,
    } = useGames(selectedGenre, selectedPlatform);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Heading>{error}</Heading>}
            <Heading marginY={2} size="3xl" fontWeight="700">
                {!error
                    ? selectedGenre
                        ? selectedGenre.name
                        : "New and trading"
                    : ""}
            </Heading>
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                }}
                padding="10px"
                spacing={7}
            >
                {isLoading &&
                    skeleton.map((index) => (
                        <GameCardContainer key={index}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}
