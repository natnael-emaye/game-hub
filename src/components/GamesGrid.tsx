import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

import apiClient from "../utils/api-client";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export default function GamesGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => setGames(res.data.results))
            .catch((error: AxiosError) => setError(error.message));
        //   return () =>
    }, []);

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
