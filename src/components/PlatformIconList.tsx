import { HStack, Icon } from "@chakra-ui/react";
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";

import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { PlatformProps } from "../hooks/useGames";

interface Props {
    platforms: PlatformProps[];
}

export default function PlatformIconsList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playStation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
    };

    return (
        <HStack marginY={4} spacing={4}>
            {platforms.map(({id, slug }) => (
                <Icon key={id} color="gray.500" as={iconMap[slug]} />
            ))}
        </HStack>
    );
}
