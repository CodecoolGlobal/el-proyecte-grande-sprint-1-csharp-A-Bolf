import LoginButton from "./LoginButton";
import logo from "../SitRep_logo.png";
const Landing = () => {
  return (
    <div className="landing">
      <img className="logo" src={logo} />
      <div className="landing-bg">
        <div className="landing-container">
          <h1 className="landing-title">SitRep</h1>
          <p className="landing-text">Project Management tool</p>
        </div>
      </div>
      <LoginButton />
    </div>
  );
};

export default Landing;
