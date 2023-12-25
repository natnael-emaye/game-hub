import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <HStack>
            <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <Text whiteSpace="nowrap" >{colorMode === "light" ? "light" : "dark"} mode</Text>
        </HStack>
    );
}
