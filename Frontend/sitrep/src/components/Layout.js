import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
