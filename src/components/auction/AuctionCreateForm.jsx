import React, {useState} from 'react';
import {Button, FormControl, Grid, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {AuctionService} from "../../api/auction/AuctionService";

const AuctionCreateForm = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [startsAt, setStartsAt] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        if (!isNumeric(price)) {
            setError(true);
            return
        }
        setError(false);
        createAuction({
            name: name,
            description: description,
            price: price,
            startsAt: startsAt
        }, setError)
    }

    function createAuction(auction, setError) {
        AuctionService.createAuction(auction)
            .then(result => {
                setSuccess(true);
                console.log(result.data);
            }).catch(err => setError(err))
    }

    return <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
    >
        <Grid item xs={12}>
            <Typography textAlign="center">CREATE AN AUCTION</Typography>
        </Grid>
        <Grid item xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
        >
            <FormControl>
                <TextField label="Name" variant="standard" required onChange={e => setName(e.target.value)}/>
                <TextField label="Description" variant="standard" multiline required
                           onChange={e => setDescription(e.target.value)}/>
                <TextField label="Price" variant="standard" required onChange={e => setPrice(e.target.value)}/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker onChange={value => setStartsAt(value)}/>
                </LocalizationProvider>
                <Button size="large" onClick={handleSubmit}>Create</Button>
            </FormControl>
        </Grid>
    </Grid>
};

export default AuctionCreateForm;

function isNumeric(str) {
    if (typeof str !== "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}
