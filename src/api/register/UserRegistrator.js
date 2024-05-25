import UserService from "../user/UserService";

export const handleRegister = async (
  e,
  email,
  password,
  isLoading,
  isError,
  navigate,
) => {
  isLoading(true);
  e.preventDefault();
  await createUser(email, password, isLoading, isError, navigate);
};

const createUser = async (email, password, isLoading, isError, navigate) => {
  try {
    const response = await UserService.createUser(email, password);
    alert("USER HAS BEEN CREATED!");
    navigate("/login");
    return response;
  } catch (e) {
    isError(e);
    console.log(e);
  } finally {
    isLoading(false);
  }
};
