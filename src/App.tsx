import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenre";
import { PlatformProps } from "./hooks/useGames";
import GameGrid from "./components/GameGrid";
import SortSelector from "./components/SortSelector";

export interface GameQueryProps {
    genre: Genre | null;
    platform: PlatformProps | null;
    ordering: string;
}

// TODO: wakatime
function App() {
    const [gameQuery, setGameQuery] = useState<GameQueryProps>(
        {} as GameQueryProps
    );

    return (
        <div className="">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav"
                        "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem pl="2" area={"nav"}>
                    <NavBar />
                </GridItem>
                <Show above="lg">
                    <GridItem paddingX={5} area={"aside"}>
                        <GenreList
                            selectedGenre={gameQuery.genre}
                            onSelectedGenre={(genre) =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem pl="2" area={"main"} overflowX="hidden">
                    <HStack spacing={5} paddingLeft={2} marginBottom={3}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectedPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        />
                        <SortSelector
                            ordering={gameQuery.ordering}
                            onSelectedSortOrder={(ordering) =>
                                setGameQuery({ ...gameQuery, ordering })
                            }
                        />
                    </HStack>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
