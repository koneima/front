import React, { useEffect, useState } from "react";
import UserService from "../../../api/user/UserService";
import { Typography } from "@mui/material";
import ApiErrorAlert from "../../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../../error/ApiSuccessAlert";
import DetailText from "../../shared/DetailText";
import FullRowGridItem from "../../styled/FullRowGridItem";
import CenteredRowGridContainer from "../../styled/CenteredRowGridContainer";

const UserDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    UserService.receiveUserInformation()
      .then((result) => {
        setError(null);
        setData(result.data);
        console.log(result);
      })
      .catch((err) => {
        setError(err);
        setSuccess(null);
      });
  }, []);

  return (
    <CenteredRowGridContainer>
      {error && (
        <FullRowGridItem>
          {" "}
          <ApiErrorAlert error={error} />{" "}
        </FullRowGridItem>
      )}
      {success && (
        <FullRowGridItem>
          {" "}
          <ApiSuccessAlert message="Auction was created!" />{" "}
        </FullRowGridItem>
      )}
      {data && (
        <FullRowGridItem>
          <Typography variant="h3" textAlign="center">
            ABOUT ME
          </Typography>
          <DetailText name="Username" property={data.username} />
          <DetailText
            name="Authorities"
            property={Object.values(data.authorities)}
          />
          <DetailText name="ID" property={data.id} />
        </FullRowGridItem>
      )}
    </CenteredRowGridContainer>
  );
};

export default UserDetails;
