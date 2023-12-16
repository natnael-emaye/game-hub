import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getOptimizedImage from "../utils/image-url";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card>
            <Image src={getOptimizedImage(game.background_image)} />
            <CardBody>
                <Heading size="xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    {/* <PlatformIconsList
                        platforms={game.parent_platforms.map(
                            ({ platforms }) => platforms
                        )}
                    /> */}
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}
