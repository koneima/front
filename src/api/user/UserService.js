import userApi from "../axios/UserAxios";

const URL = "/user";
const createUser = async (email, password) => {
  return await userApi.post(URL, { email: email, password: password });
};

const receiveUserInformation = async () => {
  return await userApi.get(URL + "/me");
};

const deleteUser = async () => {
  return await userApi.delete(URL + "/me");
};

const changeCredentials = async (email, password) => {
  if (email === undefined && password === undefined) return;
  else if (email === undefined)
    return await userApi.patch(URL + "/me", { password: password });
  else if (password === undefined)
    return await userApi.patch(URL + "/me", { email: email });
  return await userApi.patch(URL + "/me", { email: email, password: password });
};

const UserService = {
  createUser,
  receiveUserInformation,
  deleteUser,
  changeCredentials,
};

export default UserService;
