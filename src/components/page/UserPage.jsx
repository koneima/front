import React from "react";
import TopNavBar from "../shared/TopNavBar";
import UserInformationContainer from "../user/details/UserInformationContainer";
import FlexBox from "../styled/FlexBox";
import RowGridContainer from "../styled/RowGridContainer";
import FullRowGridItem from "../styled/FullRowGridItem";

const UserPage = () => {
  return (
    <FlexBox>
      <RowGridContainer>
        <FullRowGridItem>
          <TopNavBar />
        </FullRowGridItem>
        <FullRowGridItem>
          <UserInformationContainer />
        </FullRowGridItem>
      </RowGridContainer>
    </FlexBox>
  );
};

export default UserPage;
