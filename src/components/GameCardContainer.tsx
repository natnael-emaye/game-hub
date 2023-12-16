import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
    return (
        <Card minWidth="100%" rounded={10} overflow="hidden">
            {children}
        </Card>
    );
}
