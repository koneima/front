import React, { useState } from "react";
import TopNavBar from "../shared/TopNavBar";
import AuctionContainer from "../auction/AuctionContainer";
import AuctionSearchBar from "../auction/AuctionSearchBar";
import { Grid } from "@mui/material";
import FullRowGridItem from "../styled/FullRowGridItem";
import RowGridContainer from "../styled/RowGridContainer";
import FlexBox from "../styled/FlexBox";

const Home = () => {
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
          <AuctionContainer filterValue={filterValue} />
        </Grid>
      </RowGridContainer>
    </FlexBox>
  );
};

export default Home;
