import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getOptimizedImage from "../utils/image-url";

interface Props {
    selectedGenre: Genre | null;
    onSelectedGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectedGenre }: Props) {
    const { data: genres, error, isLoading } = useGenre();
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading size="lg" marginBottom={2}>Genres</Heading>
            <List>
                {genres.map((genre) => (
                    <ListItem paddingY={1} key={genre.id}>
                        <HStack padding={1}>
                            <Image
                                objectFit="cover"
                                borderRadius={6}
                                boxSize="32px"
                                src={getOptimizedImage(genre.image_background)}
                            />
                            <Button
                                whiteSpace="pre-wrap"
                                textAlign="left"
                                onClick={() => onSelectedGenre(genre)}
                                variant="link"
                                fontWeight={
                                    selectedGenre?.id == genre.id
                                        ? "bold"
                                        : "normal"
                                }
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default GenreList;
