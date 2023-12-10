import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "../utils/api-client";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const controller = new AbortController();
    
    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games", {
                signal: controller.signal,
            })
            .then((res) => setGames(res.data.results))
            .catch((error: AxiosError) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            });
        return () => controller.abort();
    }, []);

    return { games, error };
}
