import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "../utils/api-client";

export interface PlatformProps {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platforms: PlatformProps }[];
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchGamesResponse>("/games", {
                signal: controller.signal,
            })
            .then((res) => {
                setGames(res.data.results);
                setLoading(true);
            })

            .catch((error: AxiosError) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(true);
            });
        // return () => controller.abort();
    }, []);

    return { games, error,isLoading };
}
