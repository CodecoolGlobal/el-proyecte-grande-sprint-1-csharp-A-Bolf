import { useRef, useState, useEffect, useContext } from "react";
import * as React from "react";
import AuthContext from "../Context/AuthProvider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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

const theme = createTheme({
  palette: {
    primary: { main: "#343a40" },
  },
});

export default function Login() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

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
    try {
      axios
        .post(`${API_ENDPOINT}/api/Auth/login`, {
          userName: user,
          password: pwd,
        })
        .then((res) => {
          console.log(res.data);
          let accessToken = res?.data;
          setAuth({ user, pwd, accessToken });
        });
    } catch (error) {
      if (!error.response) {
        setErrMsg("No Server Response");
      } else if (error.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
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
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
