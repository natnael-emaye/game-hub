import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortOrderProps {
    value: string;
    label: string;
}

interface Props {
    ordering: string;
    onSelectedSortOrder: (ordering: string) => void;
}

export default function SortSelector({ ordering, onSelectedSortOrder }: Props) {
    const sortOrders: SortOrderProps[] = [
        {
            value: "",
            label: "Relevance",
        },
        {
            value: "-added",
            label: "Data added",
        },
        {
            value: "name",
            label: "Name",
        },
        {
            value: "-release",
            label: "Released date",
        },
        {
            value: "-metacritic",
            label: "Popularity",
        },
        {
            value: "-rating",
            label: "Average rating",
        },
    ];

    const currentSortOrder = sortOrders.find(
        (sortOrder) => sortOrder.value == ordering
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || "Relevant"}
            </MenuButton>
            <MenuList>
                {sortOrders.map(({ value, label }) => (
                    <MenuItem
                        key={label}
                        onClick={() => onSelectedSortOrder(value)}
                    >
                        {label}
                    </MenuItem>
                ))}
                <MenuItem>Relevant</MenuItem>
            </MenuList>
        </Menu>
    );
}
