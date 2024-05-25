import React from 'react';
import {Typography} from "@mui/material";

const DetailText = (props) => (
    <>
        <Typography variant="body1" sx={{textAlign: "center"}}>
            {props.name}
        </Typography>
        <Typography sx={{fontSize: 14, textAlign: "center"}} color="text.secondary" gutterBottom>
            {props.property}
        </Typography>
    </>
);

export default DetailText;