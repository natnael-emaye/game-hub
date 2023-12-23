import { GameQueryProps } from "../App";
import useData from "./useData";

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

const useGames = (gameQuery: GameQueryProps) => {
    const { genre, platform } = gameQuery;
    return useData<Game>(
        "/games",
        {
            params: {
                genres: genre?.id,
                platforms: platform?.id,
            },
        },
        [gameQuery]
    );
};

export default useGames;
