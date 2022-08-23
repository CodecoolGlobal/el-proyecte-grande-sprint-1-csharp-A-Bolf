import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome, FaChartArea } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  let navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate(`./${selected}`);
      }}
      style={{
        backgroundColor: "#343a40",
        position: "relative",
        marginTop: "45px",
        // margin is to avoid overlap with topnavbar
      }}
    >
      <Toggle />
      <Nav defaultSelected="Dashboard">
        <NavItem eventKey="Dashboard">
          <NavIcon>
            <FaHome style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="Stats">
          <NavIcon>
            <FaChartArea style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Charts</NavText>
        </NavItem>
        <NavItem eventKey="Add-Issue">
          <NavIcon>
            <BiAddToQueue style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>New Issue</NavText>
        </NavItem>
        <NavItem eventKey="Issues">
          <NavIcon>
            <BsListTask style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Issues</NavText>
        </NavItem>
        <NavItem eventKey="Settings">
          <NavIcon>
            <IoMdSettings style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default SideNavBar;
