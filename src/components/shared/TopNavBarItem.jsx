import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const TopNavBarItem = (props) => {
    const {name, navigateRoute} = props;
    const navigate = useNavigate();

    return (
        <Button
            color="inherit"
            onClick={() => navigate(navigateRoute)}
        >{name}
        </Button>
    )
}

export default TopNavBarItem;
