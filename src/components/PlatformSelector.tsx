import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { PlatformProps } from "../hooks/useGames";

interface Props {
    selectedPlatform: PlatformProps | null;
    onSelectedPlatform: (platform: PlatformProps) => void;
}

export default function PlatformSelector({
    selectedPlatform,
    onSelectedPlatform,
}: Props) {
    const { data: platforms, error } = usePlatform();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "platform"}
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => (
                    <MenuItem
                        onClick={() => onSelectedPlatform(platform)}
                        key={platform.id}
                    >
                        {platform.slug}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
