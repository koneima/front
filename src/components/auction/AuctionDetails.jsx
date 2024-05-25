import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import DetailText from "../shared/DetailText";
import AuctionActions from "./AuctionActions";
import ApiErrorAlert from "../../error/ApiErrorAlert";

const AuctionDetails = ({
  currentPrice,
  description,
  endsAt,
  id,
  name,
  ownerId,
  startPrice,
  startsAt,
  winnerEmail,
  winnerId,
}) => {
  const [error, setError] = useState(null);

  return (
    <>
      {error && <ApiErrorAlert error={error}></ApiErrorAlert>}
      <Card
        sx={{ minWidth: 275 }}
        style={{ border: "none", boxShadow: "none" }}
      >
        <DetailText name="AUCTION" />
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
        <AuctionActions auctionId={id} setError={setError} />
      </Card>
    </>
  );
};
export default AuctionDetails;
