import React, { useState } from "react";
import TopNavBar from "../shared/TopNavBar";
import AuctionCreateForm from "../auction/AuctionCreateForm";
import FullRowGridItem from "../styled/FullRowGridItem";
import FlexBox from "../styled/FlexBox";
import RowGridContainer from "../styled/RowGridContainer";

const AuctionCreatePage = () => {
  const [error, setError] = useState(null);
  console.log(error);
  return (
    <FlexBox>
      <RowGridContainer>
        <FullRowGridItem>
          <TopNavBar />
        </FullRowGridItem>
        <FullRowGridItem>
          <AuctionCreateForm error={setError} />
        </FullRowGridItem>
      </RowGridContainer>
    </FlexBox>
  );
};

export default AuctionCreatePage;
