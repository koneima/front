import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import ChangeCredentialsButton from "./ChangeCredentialsButton";
import DeleteAccountButton from "./DeleteAccountButton";

const UserInformationContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={3}>
          <Box alignItems="center" justifyContent="center" display="flex">
            <Typography variant="h6">ACCOUNT ACTIONS</Typography>
          </Box>
          <Box alignItems="center" justifyContent="center" display="flex">
            <ChangeCredentialsButton />
            <DeleteAccountButton />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <UserDetails />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInformationContainer;
