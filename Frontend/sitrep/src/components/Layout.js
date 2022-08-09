import { Outlet } from "react-router";
import SideNavBar from "./SideNavBar";
const Layout = () => {
  return (
    <>
      <SideNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
