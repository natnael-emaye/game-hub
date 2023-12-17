import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getOptimizedImage from "../utils/image-url";
// lesson 97 genres skeleton
function GenreList() {
    const { data: genres, error, isLoading } = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {genres.map((genre) => (
                <ListItem paddingY={1} key={genre.id}>
                    <HStack padding={1}>
                        <Image
                            borderRadius={6}
                            boxSize="32px"
                            src={getOptimizedImage(genre.image_background)}
                        />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;
