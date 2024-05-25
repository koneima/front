import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AuctionDetails from "../auction/AuctionDetails";
import { AuctionService } from "../../api/auction/AuctionService";
import { useNavigate, useParams } from "react-router-dom";
import TopNavBar from "../shared/TopNavBar";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";
import ItemDetails from "../item/ItemDetails";
import { ItemService } from "../../api/item/ItemService";
import CenteredRowGridContainer from "../styled/CenteredRowGridContainer";
import FlexBox from "../styled/FlexBox";
import FullRowGridItem from "../styled/FullRowGridItem";
import CenteredFlexBox from "../styled/CenteredFlexBox";

const AuctionDetailsPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [auctionData, setAuctionData] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [childKey, setChildKey] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    getAuctionData(id, setAuctionData, setError);
    getItemData(id, setItemData);
  }, []);

  function bidOnAction() {
    setChildKey(childKey * 89);
    AuctionService.bidOnAuction(id, price)
      .then(() => {
        setSuccess(true);
        getAuctionData(id, setAuctionData, setSuccess);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setSuccess(null);
      });
  }

  function getAuctionData(id, setAuctionData, setError) {
    AuctionService.getAuction(id)
      .then((result) => {
        setAuctionData(result.data);
        console.log(result.data);
      })
      .catch((err) => setError(err));
  }

  function getItemData(id, setItemData) {
    ItemService.getItemFromAuction(id)
      .then((result) => {
        setItemData(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }

  const handleBid = () => {
    if (!isNumeric(price)) {
      setPriceError(true);
      return;
    }
    setPriceError(false);
    bidOnAction();
    getAuctionData(id, setAuctionData, setError);
    getItemData(id, setItemData, setError);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/items/creation/${id}`);
  };

  return (
    <FlexBox>
      <CenteredRowGridContainer>
        <FullRowGridItem>
          <TopNavBar />
        </FullRowGridItem>
        {error && (
          <FullRowGridItem>
            {" "}
            <ApiErrorAlert error={error} key={childKey} />{" "}
          </FullRowGridItem>
        )}
        {success && (
          <FullRowGridItem>
            {" "}
            <ApiSuccessAlert
              message="Auction was bid successfully!"
              key={childKey}
            />{" "}
          </FullRowGridItem>
        )}
        <Grid item xs={6}>
          {auctionData && (
            <AuctionDetails
              currentPrice={auctionData.currentPrice}
              description={auctionData.description}
              endsAt={auctionData.endsAt}
              id={auctionData.id}
              name={auctionData.name}
              ownerId={auctionData.ownerId}
              startPrice={auctionData.startPrice}
              startsAt={auctionData.startsAt}
              winnerEmail={auctionData.winnerEmail}
              winnerId={auctionData.winnerId}
            />
          )}
        </Grid>
        <Grid item xs={6}>
          {itemData ? (
            <ItemDetails itemData={itemData} />
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button onClick={submitHandler}>
                ADD AN ITEM TO THE AUCTION
              </Button>
            </Box>
          )}
        </Grid>
        <FullRowGridItem>
          {auctionData && (
            <CenteredFlexBox>
              {<Button onClick={handleBid}>BID</Button>}
              {!priceError ? (
                <TextField
                  id="outlined-number"
                  label="Price"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setPrice(e.target.value)}
                />
              ) : (
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                  helperText="You have to provide a proper number."
                  variant="standard"
                />
              )}
            </CenteredFlexBox>
          )}
        </FullRowGridItem>
      </CenteredRowGridContainer>
    </FlexBox>
  );
};

export default AuctionDetailsPage;

function isNumeric(str) {
  if (typeof str !== "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
