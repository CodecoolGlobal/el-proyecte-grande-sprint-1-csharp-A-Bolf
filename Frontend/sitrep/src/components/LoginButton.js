import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/app/dashboard">
      <button className="btn btn-primary">Login</button>{" "}
    </Link>
  );
};
export default LoginButton;
