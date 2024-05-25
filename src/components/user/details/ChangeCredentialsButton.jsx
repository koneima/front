import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import UserService from "../../../api/user/UserService";

const ChangeCredentialsButton = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCredentialChange = () => {
        console.log(email)
        console.log(password)
        UserService.changeCredentials(email, password)
            .then(result => {

            })
            .catch(err => {

            })

    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Change credentials
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Change credentials</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide new credentials
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={e => setEmail(e.target.value || undefined)}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={e => setPassword(e.target.value || undefined)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCredentialChange}>Change</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ChangeCredentialsButton;