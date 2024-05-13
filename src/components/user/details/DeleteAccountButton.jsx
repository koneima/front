import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import UserService from "../../../api/user/UserService";
import {useNavigate} from "react-router-dom";

const DeleteAccountButton = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        UserService.deleteUser()
            .then(_ => navigate("/logout"))
            .catch(err => console.log(err))
    }

    return <>
        <Button variant="outlined" onClick={handleClickOpen}>
            delete account
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Delete account
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure that u want to delete your account?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleDelete} autoFocus>Yes</Button>
            </DialogActions>
        </Dialog>
    </>
};

export default DeleteAccountButton;