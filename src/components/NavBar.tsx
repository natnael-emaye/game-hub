import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
export default function NavBar() {
    return (
        <HStack>
            <Image src={logo} boxSize="50px" />
        </HStack>
    );
}
