import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import VerifyOTP from "../components/VerifyOTP";
import CrimeFeed from "../pages/CrimeFeed";
import EditProfile from "../pages/EditProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfil
import VerifyOTP from "../components/VerifyOTP";
import CrimePost from "../pages/CrimePost";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CrimeFeed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);
