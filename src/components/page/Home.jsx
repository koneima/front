import React, {useState} from 'react';
import TopNavBar from "../shared/TopNavBar";
import AuctionContainer from "../auction/AuctionContainer";
import AuctionSearchBar from "../auction/AuctionSearchBar";
import {Box, Grid} from "@mui/material";

const Home = () => {
    const [filterValue, setFilterValue] = useState({});

    return (
        <Box sx={{flexGrow: 1, p: 2}}>
            <Grid container
                  spacing={2}
                  direction="row"
            >
                <Grid item xs={12}>
                    <TopNavBar/>
                </Grid>
                <Grid item xs={2}>
                    <AuctionSearchBar onChange={(value) => setFilterValue(value)}/>
                </Grid>
                <Grid item xs={10}>
                    <AuctionContainer filterValue={filterValue}/>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Home;