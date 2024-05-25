import { Card, CardContent } from "@mui/material";
import React from "react";
import DetailText from "../shared/DetailText";

const ItemDetails = ({ itemData }) => {
  return (
    <>
      <Card
        sx={{ minWidth: 275 }}
        style={{ border: "none", boxShadow: "none" }}
      >
        <DetailText name="ITEM" />
        <CardContent>
          <DetailText name="Name" property={itemData.name} />
          <DetailText name="Original price" property={itemData.price} />
          <DetailText name="Category" property={itemData.category.name} />
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetails;
