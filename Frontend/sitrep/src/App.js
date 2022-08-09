import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <Routes>
        <Route path="app" element={<Layout />}>
          <Route
            path="dashboard"
            element={<Dashboard updates={Updates} />}
          ></Route>
        </Route>
      </Routes>

      {/* <FadeInDiv>
                {ShowSplashScreen &&
                    <div className="landing">
                        <img className="logo" src={logo} />
                        <Landing />
                        <LoginButton onClick={LoginClick} /></div>}
                {!ShowSplashScreen &&
                    <><Sidebar /><Dashboard updates={Updates} />
                        <div className="chart-container">
                            <Bar style={{ width: "60vh", height: "13vh" }}
                                data={data} options={options} />

                        </div>
                    </>}
            </FadeInDiv> */}
    </div>
  );
}

export default App;
