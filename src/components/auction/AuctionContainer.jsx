import React, { useState } from "react";
import { AuctionService } from "../../api/auction/AuctionService";
import Auction from "./Auction";
import moment from "moment";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import FlexBox from "../styled/FlexBox";
import CenteredRowGridContainer from "../styled/CenteredRowGridContainer";
import FullRowGridItem from "../styled/FullRowGridItem";
import CenteredFlexBox from "../styled/CenteredFlexBox";

const AuctionContainer = (props) => {
  const filter = props.filterValue;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const getAuctions = (page) => {
    AuctionService.getAuctions(
      asLocalDateTime(filter.startsAtFrom),
      asLocalDateTime(filter.startsAtTo),
      asLocalDateTime(filter.endsAtFrom),
      asLocalDateTime(filter.endsAtTo),
      asName(filter.name),
      page,
    )
      .then((result) => {
        if (result.status === 500) {
          navigate("/login");
        }
        setData(result.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <FlexBox>
      <CenteredRowGridContainer spacing={2}>
        <FullRowGridItem>
          <CenteredFlexBox>
            <Button size={"large"} onClick={() => getAuctions(page)}>
              Search auctions
            </Button>
          </CenteredFlexBox>
        </FullRowGridItem>
        <FullRowGridItem>
          <Auction
            id={"ID"}
            name={"NAME"}
            startsAt={"TIME TILL START"}
            endsAt={"TIME TILL END"}
            price={"CURRENT PRICE"}
            winnerEmail={"WINNERS EMAIL"}
          />
          {loaded &&
            data.content.map((auction) => (
              <Auction
                id={auction.id}
                key={auction.id}
                name={auction.name}
                startsAt={auction.startsAt}
                endsAt={auction.endsAt}
                price={auction.currentPrice}
                winnerEmail={auction.winnerEmail}
                action={"DETAILS"}
              />
            ))}
        </FullRowGridItem>
        <FullRowGridItem>
          {loaded && (
            <CenteredFlexBox>
              {page !== 0 && (
                <Button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  Previous page
                </Button>
              )}

              {!data.last && (
                <Button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Next page
                </Button>
              )}
            </CenteredFlexBox>
          )}
        </FullRowGridItem>
      </CenteredRowGridContainer>
    </FlexBox>
  );
};

export default AuctionContainer;

const asLocalDateTime = (date) =>
  date === undefined || date === null
    ? null
    : moment(dayjs(date).toDate()).format("YYYY-MM-DDTHH:mm");

const asName = (name) => (name === "" || name === undefined ? null : name);
