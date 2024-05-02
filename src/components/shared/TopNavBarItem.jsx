import React from "react";
import {Link} from "react-router-dom";
import "../../styles/shared/NavBar.css"

const TopNavBarItem = (props) => {
    const {name, navigateRoute} = props;

    return (
        <div>
            <Link
                to={navigateRoute}
                className="text-link"
            >
                <h1>{name}</h1>
            </Link>
        </div>
    )
}

export default TopNavBarItem;
