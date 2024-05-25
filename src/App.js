import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Home from "./components/page/Home";
import Register from "./components/page/Register";
import Login from "./components/page/Login";
import NotFound from "./components/page/NotFound";
import AuctionDetailsPage from "./components/page/AuctionDetailsPage";
import AuctionCreatePage from "./components/page/AuctionCreatePage";
import UserPage from "./components/page/UserPage";
import MyAuctionPage from "./components/page/MyAuctionPage";
import ItemCreatePage from "./components/page/ItemCreatePage";
import ItemEditPage from "./components/page/ItemEditPage";

function Logout() {
  localStorage.clear();
  return <Navigate to={"/login"} />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/me"} element={<UserPage />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/register"} element={<RegisterAndLogout />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/my-auctions"} element={<MyAuctionPage />} />
        <Route
          path={"/auctions/details/:id"}
          element={
            <ProtectedRoute>
              <AuctionDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/auctions/creation"}
          element={
            <ProtectedRoute>
              <AuctionCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/items/creation/:id"}
          element={
            <ProtectedRoute>
              <ItemCreatePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/items/edition/:id"}
          element={
            <ProtectedRoute>
              <ItemEditPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
