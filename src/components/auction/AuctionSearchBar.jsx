import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Item } from "../shared/Item";
import DateTimeRangeItem from "../shared/DateTimeRangeItem";

const AuctionSearchBar = (props) => {
  const [name, setName] = useState(null);
  const [startsAtFrom, setStartsAtFrom] = useState(null);
  const [startsAtTo, setStartsAtTo] = useState(null);
  const [endsAtFrom, setEndsAtFrom] = useState(null);
  const [endsAtTo, setEndsAtTo] = useState(null);

  return (
    <Stack spacing={1} direction="column" alignItems="center">
      <Item>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          By name:
        </Typography>
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </Item>
      <Item>
        <DateTimeRangeItem
          name={"Starts at"}
          setStartsAtFrom={setStartsAtFrom}
          setStartsAtTo={setStartsAtTo}
        ></DateTimeRangeItem>
      </Item>
      <Item>
        <DateTimeRangeItem
          name={"Ends at"}
          setStartsAtFrom={setEndsAtFrom}
          setStartsAtTo={setEndsAtTo}
        ></DateTimeRangeItem>
      </Item>
      <Button
        color="primary"
        onClick={() =>
          props.onChange({
            name,
            startsAtFrom,
            startsAtTo,
            endsAtFrom,
            endsAtTo,
          })
        }
      >
        Apply filters
      </Button>
    </Stack>
  );
};

export default AuctionSearchBar;
