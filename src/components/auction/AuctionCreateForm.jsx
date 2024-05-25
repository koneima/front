import React, { useState } from "react";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AuctionService } from "../../api/auction/AuctionService";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";
import CenteredFlexBox from "../styled/CenteredFlexBox";
import FullRowGridItem from "../styled/FullRowGridItem";
import CenteredFullRowGridItem from "../styled/CenteredFullRowGridItem";

const AuctionCreateForm = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [startsAt, setStartsAt] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [childKey, setChildKey] = useState(7);

  const handleSubmit = () => {
    setChildKey(childKey * 89);
    createAuction({
      name: name,
      description: description,
      price: price,
      startsAt: startsAt,
    });
  };

  function createAuction(auction) {
    AuctionService.createAuction(auction)
      .then(() => {
        setSuccess(true);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setSuccess(null);
      });
  }

  return (
    <CenteredFlexBox>
      {error && (
        <FullRowGridItem>
          {" "}
          <ApiErrorAlert error={error} key={childKey} />{" "}
        </FullRowGridItem>
      )}
      {success && (
        <FullRowGridItem>
          {" "}
          <ApiSuccessAlert message="Auction was created!" key={childKey} />{" "}
        </FullRowGridItem>
      )}
      <FullRowGridItem>
        <Typography textAlign="center">CREATE AN AUCTION</Typography>
      </FullRowGridItem>
      <CenteredFullRowGridItem>
        <FormControl>
          <TextField
            label="Name"
            variant="standard"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="standard"
            multiline
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Price"
            variant="standard"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker onChange={(value) => setStartsAt(value)} />
          </LocalizationProvider>
          <Button size="large" onClick={handleSubmit}>
            Create
          </Button>
        </FormControl>
      </CenteredFullRowGridItem>
    </CenteredFlexBox>
  );
};

export default AuctionCreateForm;
