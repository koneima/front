import React from 'react';

const ErrorIndicator = (props) => {
    const {error} = props;
    return Array.isArray(error.response.data.errors) ?
        <h1>{JSON.stringify(error.response.data.errors, undefined, "\t")}</h1> :
        <h1>{error.response.data.message}</h1>
};

export default ErrorIndicator;