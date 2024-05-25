import AuthService from "../authorization/AuthService";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export const handleLogin = async (
  e,
  email,
  password,
  isLoading,
  isError,
  navigate,
) => {
  isLoading(true);
  e.preventDefault();

  try {
    const response = await AuthService.receiveToken(email, password);
    if (response.status === 200) {
      localStorage.setItem(ACCESS_TOKEN, response.data.token);
      localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
      console.log(localStorage.getItem(ACCESS_TOKEN));
      navigate("/");
      return alert("LOGGED IN!");
    }
  } catch (e) {
    isError(e);
    console.log(e);
  } finally {
    isLoading(false);
  }
};
