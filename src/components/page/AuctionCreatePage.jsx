import React, {useState} from 'react';
import {Box, Grid} from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import AuctionCreateForm from "../auction/AuctionCreateForm";
import ApiErrorAlert from "../../error/ApiErrorAlert";

const AuctionCreatePage = () => {
    const [error, setError] = useState(null);

    return <Box sx={{flexGrow: 1, p: 2}}>
        <Grid container
              spacing={2}
              direction="row"
        >
            <Grid item xs={12}>
                <TopNavBar/>
            </Grid>
            {error && <Grid item xs={12}> <ApiErrorAlert error={error}/> </Grid>}
            <Grid item xs={12}><AuctionCreateForm/></Grid>
        </Grid>
    </Box>
};

export default AuctionCreatePage;