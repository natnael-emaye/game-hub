import { Grid, GridItem, Show } from "@chakra-ui/react";

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
                <GridItem pl="2" bg="green" h="50" area={"nav"}>
                    Header
                </GridItem>
                <Show above="lg">
                    <GridItem pl="2" bg="red" area={"aside"}>
                        aside
                    </GridItem>
                </Show>
                <GridItem pl="2" h="100%" bg="black" area={"main"}>
                    Main
                </GridItem>
            </Grid>
        </div>
    );
}

export default App;
