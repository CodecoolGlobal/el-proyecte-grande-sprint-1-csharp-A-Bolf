import SidebarButton from "./SidebarButton";
import { FaHome } from "react-icons/fa"
const Sidebar = () => {
    return (
        <nav style={{ float: "left" }} className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark collapse">
            <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>
            <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>
            <SidebarButton ButtonText="TestingText" SidebarIcon={FaHome} >PlaceHolderText</SidebarButton>

        </nav>
    );
}
export default Sidebar;