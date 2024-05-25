import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ItemService } from "../../api/item/ItemService";

const ItemActions = (props) => {
  const navigate = useNavigate();
  const id = props.itemId;
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    ItemService.deleteItem(id)
      .then((_) => navigate("/"))
      .catch((err) => {
        setOpen(false);
        console.log(err);
      });
  };

  const handleEdit = () => {
    navigate(`/items/edition/${id}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button variant="outlined" onClick={handleClickOpen}>
        delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete item</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that u want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="outlined" onClick={handleEdit}>
        Edit
      </Button>
    </Box>
  );
};

export default ItemActions;
