import useData from "./useData";
import { Genre } from "./useGenre";

export interface PlatformProps {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    parent_platforms: { platform: PlatformProps }[];
    metacritic: number;
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: PlatformProps | null 
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id,
            },
        },
        [selectedGenre?.id, selectedPlatform?.id]
    );

export default useGames;
