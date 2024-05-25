import React from "react";
import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DateTimeRangeItem = (props) => {
  const name = props.name;
  const setStartsAtFrom = props.setStartsAtFrom;
  const setStartsAtTo = props.setStartsAtTo;
  return (
    <>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        By {name.toLowerCase()} date:
      </Typography>
      <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
        {name} from:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker onChange={(value) => setStartsAtFrom(value)} />
      </LocalizationProvider>
      <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
        {name} to:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker onChange={(value) => setStartsAtTo(value)} />
      </LocalizationProvider>
    </>
  );
};

export default DateTimeRangeItem;
