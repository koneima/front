import React from "react";
import TopNavBarItem from "./TopNavBarItem";
const TopNavBar = () => {
    return (
        <div className="TopNavBar">
            <TopNavBarItem name={"Auctions"}/>
            <TopNavBarItem name={"Users"}/>
            <TopNavBarItem name={"Log in"}/>
        </div>
    )
}

export default TopNavBar;