import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { regxEmail, regxPassword } from "../regular-Expression";
import cookies from "js-cookies";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   justifyContent: "center",
  //   paddingBottom: 150,
  //   backgroundColor: "#ff148a",
  // },
  card: {
    marginTop: 100,
    marginBottom: 230,
    backgroundColor: "#ff148a",
  },
  // button: {
  //   display: "block",
  //   marginTop: theme.spacing(2),
  // },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  btnStyle: {
    backgroundColor: "#ffffff",
    color: "#ff148a",
    fontSize: "1.2em",
  },
}));

function Login(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const router = useRouter();
  const handleChange = async () => {
    if (!regxEmail.test(userName)) {
      setUserNameErr(true);
    } else if (!regxPassword.test(password)) {
      setPasswordErr(true);
    } else {
      const data = { email: userName, password };
      try {
        const res = await axios.post(
          "https://talentheight.herokuapp.com/api/users/login",
          data
        );
        if (res && res.data.isAuth) {
          //to save token in cookies
          cookies.setItem("talentHeight", res.data.token, { expires: 3 });
          router;
          router.replace("/");
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#ff148a" }}>
        <Container component="main">
          <Grid spacing={2}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} sm={7}>
                <Card elevation={3} className={classes.card} elevation={0}>
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: "2.5em",
                      display: "flex",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                    variant="h1"
                  >
                    Welcome back !
                  </Typography>
                  <Grid container spacing={2} style={{ marginTop: 20 }}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        required
                        color="primary"
                        style={{ marginTop: 10 }}
                        onChange={(event) => {
                          setUserNameErr(false);
                          setUserName(event.target.value);
                        }}
                        error={userNameErr}
                        helperText={
                          userNameErr ? "Please enter valid User Name" : ""
                        }
                        fullWidth
                        autoFocus
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        variant="outlined"
                        onChange={(event) => {
                          setPasswordErr(false);
                          setPassword(event.target.value);
                        }}
                        error={passwordErr}
                        helperText={
                          passwordErr ? "please enter valid Password" : ""
                        }
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  isPassVisible
                                    ? setIsPassVisible(false)
                                    : setIsPassVisible(true);
                                }}
                              >
                                {isPassVisible ? (
                                  <Visibility fontSize="small" />
                                ) : (
                                  <VisibilityOff fontSize="small" />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        type={isPassVisible ? "text" : "password"}
                        value={password}
                        id="password"
                        placeholder="Password"
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        variant="contained"
                        //   color="primary"
                        className={classes.btnStyle}
                        size="medium"
                        fullWidth
                        onClick={handleChange}
                      >
                        Log in
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </div>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
