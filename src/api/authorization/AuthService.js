import api from "../axios/Axios";

const URL = "/authentication"
const receiveToken = async (email, password) => {
    return await api.post(URL + "/token", {email: email, password: password})
}

const refreshToken = async (refreshToken) => {
    return await api.post(URL, {refreshToken: refreshToken})
}

const AuthService = {
    receiveToken,
    refreshToken
}

export default AuthService;