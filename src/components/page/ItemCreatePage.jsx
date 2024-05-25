import React, { useState } from "react";
import { Grid } from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import { useParams } from "react-router-dom";
import ItemCreateForm from "../item/ItemCreateForm";
import FullRowGridItem from "../styled/FullRowGridItem";
import FlexBox from "../styled/FlexBox";

const ItemCreatePage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  console.log(error);
  return (
    <FlexBox>
      <Grid container spacing={2} direction="row">
        <FullRowGridItem>
          <TopNavBar />
        </FullRowGridItem>
        <FullRowGridItem>
          <ItemCreateForm auctionId={id} error={setError} />
        </FullRowGridItem>
      </Grid>
    </FlexBox>
  );
};

export default ItemCreatePage;
