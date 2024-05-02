import React from 'react';
import RegisterOrLoginForm from "../user/register/RegisterOrLoginForm";
import {RouteButton} from "../shared/RouteButton";

const Login = () => (
    <div className="login-page">
        <div className="redirect-container">
            <h3>Welcome to REST API app!</h3>
        </div>
        <RegisterOrLoginForm type={"Login"}/>
        <div className="redirect-container">
            <h3>Maybe you haven't been registered yet?</h3>
            <RouteButton route={"register"}/>
        </div>
    </div>
);

export default Login;
