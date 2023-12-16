import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";
import apiClient from "../utils/api-client";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default function useData<T>(endpoint:string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, {
                signal: controller.signal,
            })
            .then((res) => {
                setData(res.data.results);
                setLoading(true);
            })

            .catch((error: AxiosError) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(true);
            });
        // return () => controller.abort();
    }, []);

    return { data, error, isLoading };
}