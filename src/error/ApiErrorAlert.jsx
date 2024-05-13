import React, {useState} from 'react';
import Alert from "@mui/material/Alert";
import {AlertTitle, Typography} from "@mui/material";

const ApiErrorAlert = (props) => {
    const {error} = props;
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    console.log(error)
    const networkErrorMessage = "There is a microservice network error, please try again!"
    let errorMessage;

    if (isNetworkError(error)) {
        errorMessage = networkErrorMessage;
    } else if (isValidationError(error)) {
        errorMessage = error.response.data.errors.map((error) =>
            <Typography>{`${capitalizeFirstLetter(error.field)} : ${capitalizeFirstLetter(error.defaultMessage)}`}</Typography>)
    } else {
        errorMessage = displayErrorMessage(error)
    }

    return <>
        {open && <Alert
            severity="warning"
            onClose={handleClose}
            variant="filled"
        >
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
        </Alert>}
    </>
};

export default ApiErrorAlert;

function isNetworkError(error) {
    return error.message === "Network Error";
}

function isValidationError(error) {
    return Array.isArray(error.response.data.errors);
}

const displayErrorMessage = (error) => error.response.data.message

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}