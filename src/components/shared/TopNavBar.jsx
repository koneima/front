import React from "react";
import TopNavBarItem from "./TopNavBarItem";
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";

const TopNavBar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>REST API APP</Typography>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <TopNavBarItem
                        name={"Home"}
                        navigateRoute={"/"}
                    />
                    <TopNavBarItem
                        name={"Create auction"}
                        navigateRoute={"/auctions/creation"}
                    />
                    <TopNavBarItem
                        name={"My auctions"}
                        navigateRoute={"/my-auctions"}
                    />
                    <TopNavBarItem
                        name={"Me"}
                        navigateRoute={"/me"}
                    />
                    <TopNavBarItem
                        name={"Logout"}
                        navigateRoute={"/logout"}
                    />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavBar;