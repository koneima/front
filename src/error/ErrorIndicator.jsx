import React from "react";

const ErrorIndicator = (props) => {
  const { error } = props;

  if (isNetworkError(error))
    return <h1>There is a microservice network error, please try again!</h1>;

  return isValidationError(error)
    ? displayErrors(error)
    : displayErrorMessage(error);
};

export default ErrorIndicator;

function isNetworkError(error) {
  return error.message === "Network Error";
}

function isValidationError(error) {
  return Array.isArray(error.response.data.errors);
}

const displayErrors = (error) => (
  <h1>{JSON.stringify(error.response.data.errors, undefined, "\t")}</h1>
);

const displayErrorMessage = (error) => <h1>{error.response.data.message}</h1>;
