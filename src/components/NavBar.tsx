import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export interface SearchProps {
    onSearch: (search: string) => void;
}

export default function NavBar({ onSearch }: SearchProps) {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="50px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}
