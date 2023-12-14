import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
    return (
        <div className="">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav"
                        "aside main"`,
                }}
            >
                <GridItem pl="2" area={"nav"}>
                    <NavBar />
                </GridItem>
                <Show above="lg">
                    <GridItem pl="2" area={"aside"}>
                        <GenreList />
                    </GridItem>
                </Show>
                <GridItem pl="2" area={"main"} overflowX="hidden">
                    <GamesGrid />
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
