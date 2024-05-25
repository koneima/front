import React from 'react';
import {Box, Grid} from "@mui/material";
import TopNavBar from "../shared/TopNavBar";

const MyAuctionPage = () => {

    return <Box sx={{flexGrow: 1, p: 2}}>
        <Grid container
              spacing={2}
              direction="row"
        >
            <Grid item xs={12}>
                <TopNavBar/>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    </Box>
};

export default MyAuctionPage;