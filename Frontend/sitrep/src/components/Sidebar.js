import SidebarButton from "./SidebarButton";
import {FaHome,FaChartArea} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"
import {IoMdSettings} from "react-icons/io"
import {BsListTask} from "react-icons/bs"

import {useState} from "react";

const Sidebar = () => {
    const toggleSidebar = () => {SidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)}
    const [SidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="sidebar bg-dark d-inline-block">
            <nav style={{float: "left"}} className=" p-3 text-white ">
                <AiOutlineMenu onClick={toggleSidebar}/>
                <SidebarButton ButtonText="Home" SidebarIcon={FaHome} ShowText={SidebarOpen}> <FaHome/></SidebarButton>
                <SidebarButton ButtonText="Issues" SidebarIcon={BsListTask} ShowText={SidebarOpen}></SidebarButton>
                <SidebarButton ButtonText="Stats" SidebarIcon={FaChartArea} ShowText={SidebarOpen}></SidebarButton>
                <SidebarButton ButtonText="Settings" SidebarIcon={IoMdSettings} ShowText={SidebarOpen}></SidebarButton>
            </nav>
        </div>
    );
}
export default Sidebar;