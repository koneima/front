import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import TopNavBar from "../shared/TopNavBar";
import ItemEditForm from "../item/ItemEditForm";

const ItemEditPage = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  console.log(error);
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}>
          <TopNavBar />
        </Grid>
        <Grid item xs={12}>
          <ItemEditForm itemId={id} error={setError} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemEditPage;
