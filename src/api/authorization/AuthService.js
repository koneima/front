import axios from "axios";

const loginApi = axios.create({
    baseURL: process.env.REACT_APP_USER_API_URL
})

const URL = "/token"
const receiveToken = async (email, password) => {
    return await loginApi.post(URL, {email: email, password: password})
}

const refreshToken = async (refreshToken) => {
    return await loginApi.post(URL, {refreshToken: refreshToken})
}

const AuthService = {
    receiveToken,
    refreshToken
}

export default AuthService;