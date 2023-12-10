import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
    return (
        <HStack padding="10px" justifyContent="space-between">
            <Image src={logo} boxSize="50px" />
            <ColorModeSwitch />
        </HStack>
    );
}
