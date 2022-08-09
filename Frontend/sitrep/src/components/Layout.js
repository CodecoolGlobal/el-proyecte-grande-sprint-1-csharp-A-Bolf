import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
