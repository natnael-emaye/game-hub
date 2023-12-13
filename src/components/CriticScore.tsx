import { Badge } from "@chakra-ui/react";

export default function CriticScore({ score }: { score: number }) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
    return (
        <Badge fontSize="14px" borderRadius={1} colorScheme={color}>
            {score}
        </Badge>
    );
}
