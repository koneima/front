import api from "./Axios";

const URL = "/authentication"
const receiveToken = async (email, password) => {
    try {
        return await api.post(URL, {email: email, password: password})
    } catch (error) {
        console.log(error)
    }
}

const refreshToken = async (refreshToken) => {
    try {
        return await api.post(URL, {refreshToken: refreshToken})
    } catch (error) {
        console.log(error)
    }
}

const AuthService = {
    receiveToken,
    refreshToken
}

export default AuthService;