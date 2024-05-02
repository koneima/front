import React from 'react';
import RegisterOrLoginForm from "../user/register/RegisterOrLoginForm";
import {RouteButton} from "../shared/RouteButton";
import "../../styles/page/LoginRegister.css"

const Register = () => (
    <div className="login-page">
        <RegisterOrLoginForm type={"Register"}/>
        <div className="redirect-container">
            <h3>Maybe you have already been registered?</h3>
            <RouteButton route={"login"}/>
        </div>
    </div>
);

export default Register;