import userApi from "../axios/UserAxios";

const URL = "/user"
const createUser = async (email, password) => {
    return await userApi.post(URL, {email: email, password: password});
}

const receiveUserInformation = async () => {
    return await userApi.get(URL + "/me")
}
const UserService = {
    createUser, receiveUserInformation
}

export default UserService;