import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconList";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card rounded={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading size="xl">{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(({platforms})=>platforms)} />
            </CardBody>
        </Card>
    );
}
