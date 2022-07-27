import Landing from './components/Landing';
import LoginButton from "./components/LoginButton";
import { useState } from "react";
import logo from './SitRep_logo.png';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from "react-animations";
import Sidebar from './components/Sidebar';
const FadeInDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

function App() {
    const LoginClick = () => {
        setShowSplashScreen(false);
    }

    const [ShowSplashScreen, setShowSplashScreen] = useState(true);
    return (
        <div className="App">
            <FadeInDiv>
                {ShowSplashScreen &&
                    <div className="landing">
                        <img className="logo" src={logo} />
                        <Landing />
                        <LoginButton onClick={LoginClick} /></div>
                }
                {!ShowSplashScreen && <Sidebar />}
            </FadeInDiv>

        </div>
    );
}

export default App;
