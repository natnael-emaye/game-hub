import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "./NavBar";

export default function SearchInput({ onSearch }: SearchProps) {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            style={{ width: "100%" }}
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) return onSearch(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                />
            </InputGroup>
        </form>
    );
}
