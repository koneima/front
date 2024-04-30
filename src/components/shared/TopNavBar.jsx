import React from "react";
import TopNavBarItem from "./TopNavBarItem";
import {ACCESS_TOKEN} from "../../constants";

const TopNavBar = () => {

    return (
        <div className="TopNavBar">
            <TopNavBarItem name={"Auctions"} navigateRoute={"/auction"}/>
            {
                ACCESS_TOKEN ?
                    <TopNavBarItem name={"Me"} navigateRoute={"/user"}/> :
                    <TopNavBarItem name={"Login"} navigateRoute={"/login"}/>
            }
        </div>
    )
}

export default TopNavBar;