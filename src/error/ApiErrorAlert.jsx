import React from 'react';
import Alert from "@mui/material/Alert";

const ApiErrorAlert = (props) => {
    const {error} = props;
    const networkErrorMessage = "There is a microservice network error, please try again!"
    let errorMessage;

    if (isNetworkError(error)) {
        errorMessage = networkErrorMessage;
    } else if (isValidationError(error)) {
        errorMessage = displayErrors(error)
    } else {
        errorMessage = displayErrorMessage(error)
    }

    return <Alert variant="filled" severity="error">{errorMessage}</Alert>
};

export default ApiErrorAlert;

function isNetworkError(error) {
    return error.message === "Network Error";
}

function isValidationError(error) {
    return Array.isArray(error.response.data.errors);
}

const displayErrors = (error) => JSON.stringify(error.response.data.errors, undefined, "\t")
const displayErrorMessage = (error) => error.response.data.message
