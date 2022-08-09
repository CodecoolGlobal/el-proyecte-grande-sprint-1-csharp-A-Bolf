import SidebarButton from "./SidebarButton";
import { FaHome, FaChartArea } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const toggleSidebar = () => {
    SidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };
  const [SidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="sidebar bg-dark d-inline-block">
      <nav style={{ float: "left" }} className=" p-3 text-white ">
        <AiOutlineMenu onClick={toggleSidebar} />
        <Link to={"/app/dashboard"}>
          <SidebarButton
            ButtonText="Home"
            SidebarIcon={FaHome}
            ShowText={SidebarOpen}
          >
            {" "}
            <FaHome />
          </SidebarButton>
        </Link>
        <Link to={"/app/add-ticket"}>
          <SidebarButton
            ButtonText="New Issue"
            SidebarIcon={BiAddToQueue}
            ShowText={SidebarOpen}
          ></SidebarButton>
        </Link>
        <SidebarButton
          ButtonText="Issues"
          SidebarIcon={BsListTask}
          ShowText={SidebarOpen}
        ></SidebarButton>
        <SidebarButton
          ButtonText="Stats"
          SidebarIcon={FaChartArea}
          ShowText={SidebarOpen}
        ></SidebarButton>
        <SidebarButton
          ButtonText="Settings"
          SidebarIcon={IoMdSettings}
          ShowText={SidebarOpen}
        ></SidebarButton>
      </nav>
    </div>
  );
};
export default Sidebar;
