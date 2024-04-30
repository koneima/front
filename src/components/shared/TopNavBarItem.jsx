import React from "react";
import {Link, Navigate} from "react-router-dom";

const TopNavBarItem = (props) => {
    const {name, navigateRoute} = props;

    return (
        <Link to={navigateRoute}>
            <h1>{name}</h1>
        </Link>
    )
}

export default TopNavBarItem;
