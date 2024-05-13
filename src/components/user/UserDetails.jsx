import React, {useEffect, useState} from 'react';
import UserService from "../../api/user/UserService";
import {Grid, Typography} from "@mui/material";
import ApiErrorAlert from "../../error/ApiErrorAlert";
import ApiSuccessAlert from "../../error/ApiSuccessAlert";
import DetailText from "../shared/DetailText";

const UserDetails = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [childKey, setChildKey] = useState(7);

    useEffect(() => {
        UserService.receiveUserInformation()
            .then((result) => {
                setError(null);
                setData(result.data);
                console.log(result);
            })
            .catch(err => {
                setError(err)
                setSuccess(null)
            })
    }, [])

    return <Grid container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
    >
        {error && <Grid item xs={12}> <ApiErrorAlert error={error} key={childKey}/> </Grid>}
        {success && <Grid item xs={12}> <ApiSuccessAlert message="Auction was created!" key={childKey}/> </Grid>}
        {data && <Grid item xs={12}>
            <Typography variant="h3" textAlign="center">ABOUT ME</Typography>
            <DetailText name="Username" property={data.username}/>
            <DetailText name="Authorities" property={Object.values(data.authorities)}/>
            <DetailText name="ID" property={data.id}/>
        </Grid>}
    </Grid>
};

export default UserDetails;