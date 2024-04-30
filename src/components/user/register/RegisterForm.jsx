import React, {useState} from "react";
import {handleSubmit} from "../../../api/UserRegistrator";
import LoadingIndicator from "../../shared/LoadingIndicator";
import {useNavigate} from "react-router-dom";
import ErrorIndicator from "../../../error/ErrorIndicator";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    return <form onSubmit={(event =>
        handleSubmit(event, email, password, setLoading, setError, navigate))
    }>
        <h1>{email}</h1>
        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />

        <h1>{password}</h1>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">
            Register
        </button>
        {loading && <LoadingIndicator/>}
        {error && <ErrorIndicator error={error}/>}
    </form>;
}

export default RegisterForm;
