import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ErrorAlert from "../Alerts/ErrorAlert"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import {API_ENDPOINT} from "../../App"
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: { main: "#343a40" },
  },
});

const SignUp=React.forwardRef(({onLoginClick},ref)=> {
const [showPasswordError,setShowPasswordError]=useState(false);
const [showUsernameError,setShowUsernameError]=useState(false);
const registerFetch = (data) => {
  axios
    .post(`${API_ENDPOINT}/api/Auth/register`, {
      userName: data.get("username"),
      password: data.get("password"),
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      if (error.response) {
        setShowUsernameError(true);
      }

    });
};
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("password-confirm")) {
      setShowPasswordError(true)
    }
    else{
      registerFetch(data);
    }
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      pass2: data.get("password-confirm"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container ref={ref} component="main" className={"registration"} maxWidth="xs">
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
            noValidate
            onSubmit={handleSubmit}
            onChange={()=>{setShowPasswordError(false);setShowUsernameError(false)}}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="off"
                />
                <ErrorAlert text={"Username already taken!"} open={showUsernameError}/>
              </Grid>
              <Grid item xs={12}>

                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password-confirm"
                  label="Confirm Password"
                  type="password"
                  id="password-confirm"
                /><ErrorAlert text={"Password field must match!"} open={showPasswordError}/>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowDataSelling" color="primary" />
                  }
                  label="I consent to my private data being sold to ad companies."
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
})
export default SignUp;
