import React from "react";
import TopNavBarItem from "./TopNavBarItem";
import "../../styles/shared/NavBar.css"

const TopNavBar = () => {

    return (
        <header>
            <h2>REST API APP</h2>
            <nav>
                <ul>
                    <TopNavBarItem
                        name={"Auctions"}
                        navigateRoute={"/auction"}
                        className="nav-bar-item"
                    />
                    <TopNavBarItem
                        name={"Me"}
                        navigateRoute={"/user"}
                        className="nav-bar-item"
                    />
                </ul>
            </nav>
        </header>
    )
}

export default TopNavBar;