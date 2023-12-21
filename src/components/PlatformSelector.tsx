import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

export default function PlatformSelector() {
    const { data: platforms, error } = usePlatform();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                platform
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => (
                    <MenuItem key={platform.id}>{platform.slug}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
