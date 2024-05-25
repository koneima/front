import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyAuction = (props) => {
  const navigate = useNavigate();
  const id = props.id;
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/auctions/details/${id}`);
  };

  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        "--Grid-borderWidth": "1px",
        borderTop: "var(--Grid-borderWidth) solid",
        borderLeft: "var(--Grid-borderWidth) solid",
        borderColor: "grey.500",
        "& > div": {
          borderRight: "var(--Grid-borderWidth) solid",
          borderBottom: "var(--Grid-borderWidth) solid",
          borderColor: "grey.500",
        },
      }}
    >
      <Grid item xs={2}>
        {props.name}
      </Grid>
      <Grid item xs={2}>
        {props.startsAt}
      </Grid>
      <Grid item xs={2}>
        {props.endsAt}
      </Grid>
      <Grid item xs={2}>
        {props.price}
      </Grid>
      <Grid item xs={2}>
        {props.winnerEmail}
      </Grid>
      <Grid item xs={2}>
        {props.action ? (
          <Button size={"small"} onClick={submitHandler}>
            {props.action}
          </Button>
        ) : (
          "DETAILS"
        )}
      </Grid>
    </Grid>
  );
};

export default MyAuction;
