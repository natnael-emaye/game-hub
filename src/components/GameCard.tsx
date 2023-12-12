import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    return (
        <Card rounded={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading size="xl" >{game.name}</Heading>
            </CardBody>
        </Card>
    );
}
