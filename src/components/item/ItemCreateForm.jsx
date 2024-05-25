import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  List,
  TextField,
  Typography,
} from "@mui/material";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";
import { ItemService } from "../../api/item/ItemService";
import NestedItem from "../shared/NestedItem";

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
    <Grid container direction="row" alignItems="center" justifyContent="center">
      {error && (
        <Grid item xs={12}>
          {" "}
          <ApiErrorAlert error={error} key={childKey} />{" "}
        </Grid>
      )}
      {success && (
        <Grid item xs={12}>
          {" "}
          <ApiSuccessAlert message="Item was created!" key={childKey} />{" "}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography textAlign="center">CREATE AN AUCTION ITEM</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
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
      </Grid>
    </Grid>
  );
};

export default ItemCreateForm;
