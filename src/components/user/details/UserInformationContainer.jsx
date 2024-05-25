import React from "react";
import { Grid, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import ChangeCredentialsButton from "./ChangeCredentialsButton";
import DeleteAccountButton from "./DeleteAccountButton";
import FlexBox from "../../styled/FlexBox";
import CenteredFlexBox from "../../styled/CenteredFlexBox";
import RowGridContainer from "../../styled/RowGridContainer";

const UserInformationContainer = () => {
  return (
    <FlexBox>
      <RowGridContainer>
        <Grid item xs={3}>
          <CenteredFlexBox>
            <Typography variant="h6">ACCOUNT ACTIONS</Typography>
          </CenteredFlexBox>
          <CenteredFlexBox>
            <ChangeCredentialsButton />
            <DeleteAccountButton />
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={9}>
          <UserDetails />
        </Grid>
      </RowGridContainer>
    </FlexBox>
  );
};

export default UserInformationContainer;
