import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getOptimizedImage from "../utils/image-url";

interface Props {
    selectedGenre: Genre | null;
    setSelectedGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, setSelectedGenre }: Props) {
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
                        <Button
                            onClick={() => setSelectedGenre(genre)}
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
    );
}

export default GenreList;
