import SidebarButton from "./SidebarButton";
import { FaHome } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
const Sidebar = () => {
    return (
        <div className="sidebar bg-dark d-inline-block h-100">
            <nav style={{ float: "left" }} className="  p-3 text-white ">
                <AiOutlineMenu />
                <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>
                <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>
                <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>

            </nav></div>
    );
}
export default Sidebar;