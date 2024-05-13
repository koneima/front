import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import AuctionDetails from "../auction/AuctionDetails";
import {AuctionService} from "../../api/auction/AuctionService";
import {useParams} from "react-router-dom";
import TopNavBar from "../shared/TopNavBar";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";


const AuctionDetailsPage = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [data, setData] = useState(null);
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState(false);
    const [childKey, setChildKey] = useState(7);

    useEffect(() => {
        getAuctionData(id, setData, setSuccess);
    }, []);

    function bidOnAction() {
        setChildKey(childKey * 89);
        AuctionService.bidOnAuction(id, price)
            .then(() => {
                setSuccess(true);
                getAuctionData(id, setData, setSuccess);
                setError(null);
            })
            .catch(err => {
                setError(err)
                setSuccess(null);
            })
    }

    function getAuctionData(id, setData, setError) {
        AuctionService.getAuction(id)
            .then(result => {
                setData(result.data)
                console.log(result.data);
            }).catch(err => setError(err))
    }

    const handleBid = () => {
        if (!isNumeric(price)) {
            setPriceError(true);
            return
        }
        setPriceError(false);
        bidOnAction();
        getAuctionData(id, setData, setError)
    }

    return <Box sx={{flexGrow: 1, p: 2}}>
        <Grid container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
        >
            <Grid item xs={12}>
                <TopNavBar/>
            </Grid>
            {error && <Grid item xs={12}> <ApiErrorAlert error={error} key={childKey}/> </Grid>}
            {success && <Grid item xs={12}> <ApiSuccessAlert message="Auction was bid successfully!" key={childKey}/> </Grid>}
            <Grid item xs={12}>
                {data && <AuctionDetails
                    currentPrice={data.currentPrice}
                    description={data.description}
                    endsAt={data.endsAt}
                    id={data.id}
                    name={data.name}
                    ownerId={data.ownerId}
                    startPrice={data.startPrice}
                    startsAt={data.startsAt}
                    winnerEmail={data.winnerEmail}
                    winnerId={data.winnerId}

                />}
            </Grid>
            <Grid item xs={12}>
                {data && <Box display="flex" justifyContent="center" alignItems="center">
                    {<Button onClick={handleBid}>BID</Button>}
                    {!priceError ?
                        <TextField
                            id="outlined-number"
                            label="Price"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setPrice(e.target.value)}
                        /> :
                        <TextField
                            error
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue={price}
                            onChange={e => setPrice(e.target.value)}
                            helperText="You have to provide a proper number."
                            variant="standard"
                        />
                    }
                </Box>}
            </Grid>
        </Grid>
    </Box>
};

export default AuctionDetailsPage;

function isNumeric(str) {
    if (typeof str !== "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}