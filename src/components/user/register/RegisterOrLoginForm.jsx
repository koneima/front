import React, { useState } from "react";
import { handleRegister } from "../../../api/register/UserRegistrator";
import LoadingIndicator from "../../shared/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import ErrorIndicator from "../../../error/ErrorIndicator";
import { handleLogin } from "../../../api/login/UserLogin";
import "../../../styles/page/LoginRegister.css";

const RegisterOrLoginForm = (props) => {
  const type = props.type;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) =>
        type === "Login"
          ? handleLogin(event, email, password, setLoading, setError, navigate)
          : handleRegister(
              event,
              email,
              password,
              setLoading,
              setError,
              navigate,
            )
      }
      className="form"
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      />
      <button type="submit">{type === "Login" ? "Login" : "Register"}</button>
      {loading && <LoadingIndicator />}
      {error && <ErrorIndicator error={error} />}
    </form>
  );
};

export default RegisterOrLoginForm;
