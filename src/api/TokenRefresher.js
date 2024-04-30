import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants";
import AuthService from "./AuthService";
import {jwtDecode} from "jwt-decode";

export const refreshToken = async (isAuthorized) => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
        const response = await AuthService.refreshToken(refreshToken)
        if (response.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, response.data.access)
            isAuthorized(true)
        } else {
            isAuthorized(false)
        }
    } catch (error) {
        console.log(error)
        isAuthorized(false)
    }

}

export const authorize = async (isAuthorized) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
        isAuthorized(false)
        return
    }

    const payload = jwtDecode(token);

    if (isExpired(payload)) {
        await refreshToken(isAuthorized);
    } else {
        isAuthorized(true);
    }
}


const isExpired = (jwtPayload) => {
    const expiresAt = jwtPayload.exp;
    const now = Date.now();

    return expiresAt < now
}