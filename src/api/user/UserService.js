import userApi from "../axios/UserAxios";

const URL = "/user"
const createUser = async (email, password) => {
    return await userApi.post(URL, {email: email, password: password});
}

const UserService = {
    createUser
}

export default UserService;