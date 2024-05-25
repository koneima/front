import React, { useState } from "react";
import { Grid } from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import AuctionSearchBar from "../auction/AuctionSearchBar";
import MyAuctionContainer from "../auction/my/MyAuctionContainer";
import FlexBox from "../styled/FlexBox";
import RowGridContainer from "../styled/RowGridContainer";
import FullRowGridItem from "../styled/FullRowGridItem";

const MyAuctionPage = () => {
  const [filterValue, setFilterValue] = useState({});

  return (
    <FlexBox>
      <RowGridContainer>
        <FullRowGridItem>
          <TopNavBar />
        </FullRowGridItem>
        <Grid item xs={2}>
          <AuctionSearchBar onChange={(value) => setFilterValue(value)} />
        </Grid>
        <Grid item xs={10}>
          <MyAuctionContainer filterValue={filterValue} />
        </Grid>
      </RowGridContainer>
    </FlexBox>
  );
};

export default MyAuctionPage;
