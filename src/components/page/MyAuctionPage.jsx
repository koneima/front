import React, {useState} from 'react';
import {Box, Grid} from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import AuctionSearchBar from "../auction/AuctionSearchBar";
import MyAuctionContainer from "../auction/my/MyAuctionContainer";

const MyAuctionPage = () => {
    const [filterValue, setFilterValue] = useState({});

    return <Box sx={{flexGrow: 1, p: 2}}>
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
                <MyAuctionContainer filterValue={filterValue}/>
            </Grid>
        </Grid>
    </Box>
};

export default MyAuctionPage;