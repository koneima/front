import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../../api/AuthService";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../../constants";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const response = await AuthService.receiveToken(email, password);
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
            }
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false);
        }
    }

    return <form onSubmit={handleSubmit}>
        <h1>{name}</h1>
        <input
            type="email"
            required="true"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />

        <h1>{password}</h1>
        <input
            type="password"
            required="true"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">
            Login
        </button>
    </form>
}

export default LoginForm;
