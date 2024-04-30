import UserService from "./UserService";
import {useNavigate} from "react-router-dom";

export const handleSubmit = async (e, email, password, isLoading, isError, navigate) => {
    isLoading(true);
    e.preventDefault();
    await createUser(email, password, isLoading, isError)
}

const createUser = async (email, password, isLoading, isError, navigate) => {
    try {
        const response = await UserService.createUser(email, password);
        alert("USER HAS BEEN CREATED!")
        navigate("/login")
        return response
    } catch (e) {
        isError(e);
        console.log(e);
    } finally {
        isLoading(false);
    }
}
