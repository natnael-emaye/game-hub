import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="50px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}
