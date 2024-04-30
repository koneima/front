import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {authorize} from "../../api/TokenRefresher";

const ProtectedRoute = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        authorize(setIsAuthorized).catch(() => setIsAuthorized(false))
    }, []);

    if (isAuthorized === null)
        return <div>Loading...</div>;

    return (
        isAuthorized ? children : <Navigate to={"login"}/>
    );


}

export default ProtectedRoute;
