import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { AuctionService } from "../../api/auction/AuctionService";
import { useNavigate } from "react-router-dom";

const AuctionActions = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    AuctionService.deleteAuction(props.auctionId)
      .then((_) => navigate("/"))
      .catch((err) => {
        setOpen(false);
        console.log(err);
        props.setError(err);
      });
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
        delete auction
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that u want to delete auction?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AuctionActions;
