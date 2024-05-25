import React, {useState} from "react";
import {Collapse, List, ListItemButton, ListItemText} from "@mui/material";

const NestedItem = ({children, categories, setCategory}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSetCategory = (category) => {
        setCategory(category.id);
        console.log(category.id)
        setIsOpen((prev) => !prev);
    }

    return (
        <List>
            <ListItemButton onClick={handleIsOpen}>
                <ListItemText primary={children}/>
            </ListItemButton>
            <Collapse in={isOpen}>
                <List>
                    {categories.map((category) =>
                        <ListItemButton onClick={() => handleSetCategory(category)}>
                            <ListItemText>{category.name}</ListItemText>
                        </ListItemButton>
                    )}
                </List>
            </Collapse>
        </List>
    );
};

export default NestedItem;
