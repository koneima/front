import api from "./Axios";

const URL = "/user"
const createUser = async (email, password) => {
    return await api.post(URL, {email: email, password: password});
}

const UserService = {
    createUser
}

export default UserService;