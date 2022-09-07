import { useRef, useState, useEffect, useContext } from "react";
import * as React from "react";
import AuthContext from "../Context/AuthProvider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ErrorAlert from "../Alerts/ErrorAlert";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { API_ENDPOINT } from "../../App";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router";

const theme = createTheme({
  palette: {
    primary: { main: "#343a40" },
  },
});

const Login=React.forwardRef(({onRegisterClick},ref) =>{
  let navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(""); // this will be changed to redirect to the desired page

  //focus username(?) field on page render
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //clear error msg when user/pwd fields change
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const loginFetch = () => {
    setIsLoading(true);
    axios
      .post(`${API_ENDPOINT}/api/Auth/login`, {
        userName: user,
        password: pwd,
      })
      .then((res) => {
        console.log(res.data);
        let accessToken = res?.data;
        setAuth({ user, pwd, accessToken });

        navigate("/app/dashboard");
      })
      .catch((error) => {
        if (!error.response) {
          setErrMsg("No Server Response");
        } else if (error.response.status === 401) {
          setErrMsg("Unauthorized");
        } else if (error.response.status === 400) {
          setErrMsg("User Not Found!");
        } else {
          setErrMsg("Login Failed");
        }

        errRef.current.focus();
      });
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userValidationRef.current.reportValidity() &&
      pwValidationRef.current.reportValidity()
    ) {
      const data = new FormData(event.currentTarget);
      console.log({
        username: data.get("username"),
        password: data.get("password"),
      });
      loginFetch();
      setUser("");
      setPwd("");
    } else {
      setErrMsg("Not all fields were filled out");
    }
  };

  const userValidationRef = useRef();
  const pwValidationRef = useRef();
  return (
    <ThemeProvider theme={theme}>
      <Container ref={ref} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              ref={userRef}
              inputRef={userValidationRef}
              id="username"
              label="Username"
              name="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputRef={pwValidationRef}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <ErrorAlert text={errMsg} open={errMsg ? true : false} />

            <Grid container>
              <Grid item xs>
                <Link
                  href="https://letmegooglethat.com/?q=Memory+improvement+techniques"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
})
export default Login;
