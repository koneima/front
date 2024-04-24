import React from "react";

const TopNavBarItem = (props) => {
    const {name} = props;

    return (
        <div className="TopNavBarItem">
            <h1>{name}</h1>
        </div>
    )
}

export default TopNavBarItem;
