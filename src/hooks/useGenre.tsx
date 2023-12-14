import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "../utils/api-client";

export interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

export default function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genre", {
                signal: controller.signal,
            })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(true);
            })

            .catch((error: AxiosError) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(true);
            });
        // return () => controller.abort();
    }, []);

    return { genres, error,isLoading };
}
