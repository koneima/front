import React, {useState} from "react";
import {AlertTitle} from "@mui/material";
import Alert from "@mui/material/Alert";

const ApiSuccessAlert = (props) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return <>
        {open && <Alert
            severity="success"
            onClose={handleClose}
            variant="filled"
        >
            <AlertTitle>Success</AlertTitle>
            {props.message}
        </Alert>}
    </>
};

export default ApiSuccessAlert;
