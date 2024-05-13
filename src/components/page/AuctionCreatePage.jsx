import React, {useState} from 'react';
import {Box, Grid} from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import AuctionCreateForm from "../auction/AuctionCreateForm";

const AuctionCreatePage = () => {
    const [error, setError] = useState(null);
    console.log(error)
    return <Box sx={{flexGrow: 1, p: 2}}>
        <Grid container
              spacing={2}
              direction="row"
        >
            <Grid item xs={12}>
                <TopNavBar/>
            </Grid>
            <Grid item xs={12}><AuctionCreateForm error={setError}/></Grid>
        </Grid>
    </Box>
};

export default AuctionCreatePage;