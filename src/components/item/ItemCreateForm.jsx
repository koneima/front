import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  List,
  TextField,
  Typography,
} from "@mui/material";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";
import { ItemService } from "../../api/item/ItemService";
import NestedItem from "../shared/NestedItem";
import FullRowGridItem from "../styled/FullRowGridItem";
import CenteredFlexBox from "../styled/CenteredFlexBox";
import CenteredFullRowGridItem from "../styled/CenteredFullRowGridItem";

const ItemCreateForm = (props) => {
  const auctionId = props.auctionId;

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [childKey, setChildKey] = useState(7);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(14);

  const handleSubmit = (categoryId, auctionId, name, price) => {
    setChildKey(childKey * 89);
    createAuction(categoryId, auctionId, name, price);
  };

  function createAuction() {
    ItemService.createItem(auctionId, category, name, price)
      .then(() => {
        setSuccess(true);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setSuccess(null);
      });
  }

  useEffect(() => {
    ItemService.fetchCategories()
      .then((result) => {
        console.log(result);
        setCategories(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CenteredFlexBox>
      {error && (
        <FullRowGridItem>
          {" "}
          <ApiErrorAlert error={error} key={childKey} />{" "}
        </FullRowGridItem>
      )}
      {success && (
        <FullRowGridItem>
          {" "}
          <ApiSuccessAlert message="Item was created!" key={childKey} />{" "}
        </FullRowGridItem>
      )}
      <FullRowGridItem>
        <Typography textAlign="center">CREATE AN AUCTION ITEM</Typography>
      </FullRowGridItem>
      <CenteredFullRowGridItem>
        <FormControl>
          <TextField
            label="Name"
            variant="standard"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Price"
            variant="standard"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <List>
            <NestedItem categories={categories} setCategory={setCategory}>
              Categories
            </NestedItem>
          </List>
          <Button size="large" onClick={handleSubmit}>
            Create
          </Button>
        </FormControl>
      </CenteredFullRowGridItem>
    </CenteredFlexBox>
  );
};

export default ItemCreateForm;
