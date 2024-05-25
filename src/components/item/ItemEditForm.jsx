import React, { useEffect, useState } from "react";
import { ItemService } from "../../api/item/ItemService";
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
import NestedItem from "../shared/NestedItem";

const ItemEditForm = (props) => {
  const itemId = props.itemId;

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [childKey, setChildKey] = useState(7);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(14);

  const handleSubmit = (categoryId, auctionId, name, price) => {
    setChildKey(childKey * 89);
    editItem(categoryId, auctionId, name, price);
  };

  function editItem() {
    ItemService.patchItem(itemId, name, category, price)
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
    ItemService.getItem(itemId)
      .then((result) => {
        console.log(result.data.name);
        console.log(result.data.price);
        setName(result.data.name);
        setPrice(result.data.price);
        setCategory(result.data.category.id);
      })
      .catch((err) => console.log(err));
    ItemService.fetchCategories()
      .then((result) => {
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
          <ApiSuccessAlert message="Item was edited!" key={childKey} />{" "}
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography textAlign="center">EDIT AN ITEM</Typography>
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
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Price"
            variant="standard"
            required
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
          />
          <List>
            <NestedItem
              categories={categories}
              setCategory={setCategory}
              value={category}
            >
              Categories
            </NestedItem>
          </List>
          <Button size="large" onClick={handleSubmit}>
            Edit
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ItemEditForm;
