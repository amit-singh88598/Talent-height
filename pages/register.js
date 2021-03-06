import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import jsCookies from "js-cookies";
import React, { useState } from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import {
  regxUserName,
  regxEmail,
  // regxPhoneNumber,
  regxPassword,
} from "../regular-Expression";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 150,
    backgroundColor: "#ff148a",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btnStyle: {
    backgroundColor: "#ffffff",
    color: "#ff148a",
    fontSize: "1.2em",
  },
  textFieldStyle: {
    color: "#ffffff",
  },
}));

function Register(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  // const [gender, setGender] = React.useState("");

  const [error, setError] = useState({
    userNameErr: false,
    emailErr: false,
    // phoneErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  // const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    if (!(userName != "" && regxUserName.test(userName))) {
      setError({ userNameErr: true });
    } else if (!(email != "" && regxEmail.test(email))) {
      setError({ emailErr: true });
      // } else if (!(phone != "" && regxPhoneNumber.test(phone))) {
      //   setError({ phoneErr: true });
    } else if (!(password != "" && regxPassword.test(password))) {
      setError({ passwordErr: true });
    } else if (confirmPassword === "") {
      setError({ confirmPasswordErr: true });
    } else {
      if (password !== confirmPassword) {
        setError({ confirmPasswordErr: true });
      } else {
        const postData = { username: userName, email, password };
        console.log(postData);
        userRegister(postData);
      }
    }
  };

  const userRegister = async (data) => {
    try {
      const res = await axios.post(
        "https://talentheight.herokuapp.com/api/users/register",
        data
      );
      if (res && res.data.isAuth) {
        // to save token in cookies
        jsCookies.setItem("talentHeight", res.data.token, { expires: 3 });
        alert("Register successful");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGender = (event) => {
  //   setGender(event.target.value);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#ff148a" }}>
        <Container>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                marginTop: 40,
                fontSize: "2.2em",
                color: "#ffffff",
              }}
            >
              Let's get started!
            </Typography>
          </div>
          <Grid style={{ paddingLeft: 150, paddingRight: 150, paddingTop: 20 }}>
            <Grid item xs={12} sm={12}>
              <Card className={classes.root} elevation={0}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.textFieldStyle}
                      style={{ marginTop: 10 }}
                      onChange={(event) => {
                        setError({ userNameErr: false });
                        setUserName(event.target.value);
                      }}
                      error={error.userNameErr}
                      helperText={
                        error.userNameErr ? "Please enter valid User Name" : ""
                      }
                      fullWidth
                      placeholder="User Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      color="primary"
                      onChange={(event) => {
                        setError({ emailErr: false });
                        setEmail(event.target.value);
                      }}
                      error={error.emailErr}
                      helperText={
                        error.emailErr ? "Please enter valid email" : ""
                      }
                      fullWidth
                      type="text"
                      placeholder="Email"
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(event) => {
                        setError({ phoneErr: false });
                        setPhone(event.target.value);
                      }}
                      error={error.phoneErr}
                      helperText={
                        error.phoneErr ? "please enter valid Phone no." : ""
                      }
                      fullWidth
                      placeholder="Phone no."
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      variant="outlined"
                      onChange={(event) => {
                        setError({ passwordErr: false });
                        setPassword(event.target.value);
                      }}
                      error={error.passwordErr}
                      helperText={
                        error.passwordErr == true
                          ? " Password Contains Minimum Six Characters, At Least One Letter And One Number:"
                          : ""
                      }
                      // helperText={
                      //   error.passwordErr ? "please enter valid Password" : ""
                      // }
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
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(event) => {
                        setError({ confirmPasswordErr: false });
                        setConfirmPassword(event.target.value);
                      }}
                      error={error.confirmPasswordErr}
                      helperText={
                        error.confirmPasswordErr == true
                          ? "Please Match your Password"
                          : ""
                      }
                      // helperText={
                      //   error.confirmPasswordErr
                      //     ? "please enter valid Password"
                      //     : ""
                      // }

                      fullWidth
                      value={confirmPassword}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                isConfirmPassVisible
                                  ? setIsConfirmPassVisible(false)
                                  : setIsConfirmPassVisible(true);
                              }}
                            >
                              {isConfirmPassVisible ? (
                                <Visibility fontSize="small" />
                              ) : (
                                <VisibilityOff fontSize="small" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      type={isConfirmPassVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel id="demo-controlled-open-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={gender}
                        onChange={handleGender}
                      >
                        <MenuItem value="">
                          <em>Gender</em>
                        </MenuItem>
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid> */}
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <Button
                      variant="contained"
                      className={classes.btnStyle}
                      size="large"
                      fullWidth
                      onClick={handleChange}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
