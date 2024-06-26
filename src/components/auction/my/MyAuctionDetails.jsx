import React from "react";
import { Card, CardContent } from "@mui/material";
import DetailText from "../../shared/DetailText";

const AuctionDetails = ({
  currentPrice,
  description,
  endsAt,
  name,
  startPrice,
  startsAt,
  winnerEmail,
}) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <DetailText name="Name" property={name} />
          <DetailText name="Description" property={description} />
          <DetailText name="Starts at" property={startsAt} />
          <DetailText name="Ends at" property={endsAt} />
          <DetailText name="Start price" property={startPrice} />
          <DetailText name="Current price" property={currentPrice} />
          <DetailText
            name="Current winner"
            property={
              winnerEmail !== null
                ? winnerEmail
                : "No one has bid the auction yet"
            }
          />
        </CardContent>
      </Card>
    </>
  );
};

export default AuctionDetails;
