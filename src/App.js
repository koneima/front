import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Home from "./components/page/Home";
import Register from "./components/page/Register";
import Login from "./components/page/Login";
import NotFound from "./components/page/NotFound";

function Logout() {
    localStorage.clear();
    return <Navigate to={"/login"}/>;
}

function RegisterAndLogout() {
    localStorage.clear();
    return <Register/>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }/>
                <Route path={"/login"} element={
                    <Login/>
                }/>
                <Route path={"/logout"} element={
                    <Logout/>}
                />
                <Route path={"/register"} element=
                    {<RegisterAndLogout/>}
                />
                <Route path={"*"} element=
                    {<NotFound/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
