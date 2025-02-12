import { Outlet } from "react-router-dom";
import NavbarAfterLogin from "./components/NavbarAfterLogin";
import NavbarBeforeLogin from "./components/NavbarBeforeLogin";

export default function Root() {
  return (
    <>
      <NavbarBeforeLogin />
      <NavbarAfterLogin />
      <Outlet />
    </>
  );
}
