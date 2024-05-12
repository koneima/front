import React from 'react';
import {Card, CardContent} from "@mui/material";
import AuctionDetailText from "./AuctionDetailText";

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
                            winnerId
                        }) => {
    return <>
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <AuctionDetailText name="Name" property={name}/>
                <AuctionDetailText name="Description" property={description}/>
                <AuctionDetailText name="Starts at" property={startsAt}/>
                <AuctionDetailText name="Ends at" property={endsAt}/>
                <AuctionDetailText name="Start price" property={startPrice}/>
                <AuctionDetailText name="Current price" property={currentPrice}/>
                <AuctionDetailText name="Current winner"
                                   property={winnerEmail !== null ? winnerEmail : "No one has bid the auction yet"}/>
            </CardContent>
        </Card>
    </>
};
export default AuctionDetails;