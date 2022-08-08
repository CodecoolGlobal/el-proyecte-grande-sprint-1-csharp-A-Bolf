import Landing from "./components/Landing";
import LoginButton from "./components/LoginButton";
import Dashboard from "./components/DashBoard";
import { useState } from "react";
import logo from "./SitRep_logo.png";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import Sidebar from "./components/Sidebar";
import { Bar } from "react-chartjs-2";
import { options, data } from "./components/StackedBarChart";
import CreateTicket from "./components/CreateTicket";

const FadeInDiv = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
function App() {
  const LoginClick = () => {
    setShowSplashScreen(false);
  };

  const [ShowSplashScreen, setShowSplashScreen] = useState(true);

  const [Updates, setUpdates] = useState([
    { id: 1, issue: "Issue1", time_ago: "5 mins" },
    {
      id: 2,
      issue: "Issue2",
      time_ago: "5 mins",
    },
    {
      id: 3,
      issue: "Issue3",
      time_ago: "5 mins",
    },
  ]);
  return (
    <div className="App">
      <FadeInDiv>
        {ShowSplashScreen && (
          // <div className="landing">
          //     <img className="logo" src={logo} />
          //     <Landing />
          //     <LoginButton onClick={LoginClick} /></div>}
          <CreateTicket />
        )}
        {!ShowSplashScreen && (
          <>
            <Sidebar />
            <Dashboard updates={Updates} />
            <div className="chart-container">
              <Bar
                style={{ width: "60vh", height: "13vh" }}
                data={data}
                options={options}
              />
            </div>
          </>
        )}
      </FadeInDiv>
    </div>
  );
}

export default App;
