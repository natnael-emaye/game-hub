import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
                        <GenreList setSelectedGenre={setSelectedGenre} />
                    </GridItem>
                </Show>
                <GridItem pl="2" area={"main"} overflowX="hidden">
                    <GamesGrid selectedGenre={selectedGenre} />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
