import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Header from "../layout/header";
import {
  regxUserName,
  regxEmail,
  regxPhoneNumber,
  regxPassword,
} from "../regular-Expression";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // padding: 20,
    // backgroundColor: "#fe019a",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Register(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [data, setData] = useState(null);
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    if (!regxUserName.test(userName)) {
      setUserNameErr(true);
    } else if (!regxEmail.test(email)) {
      setEmailErr(true);
    } else if (!regxPhoneNumber.test(phone)) {
      setPhoneErr(true);
    } else if (!regxPassword.test(password)) {
      setPasswordErr(true);
    } else {
      const temp = data ? data : [];
      temp.push({ userName, email, phone, password });
      setData(temp);
      console.log(data);
    }
  };

  const handleGender = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <div>
        <Container>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Typography
              style={{
                // padding: 20,
                fontSize: "2.2em",
                // color: "#ffffff",
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
                      label="User Name"
                      variant="outlined"
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
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      color="primary"
                      onChange={(event) => {
                        setEmailErr(false);
                        setEmail(event.target.value);
                      }}
                      error={emailErr}
                      helperText={emailErr ? "Please enter valid email" : ""}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      onChange={(event) => {
                        setPhoneErr(false);
                        setPhone(event.target.value);
                      }}
                      error={phoneErr}
                      helperText={
                        phoneErr ? "please enter valid Phone no." : ""
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Confirm Password"
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
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
                        value={age}
                        onChange={handleGender}
                      >
                        <MenuItem value="">
                          <em>Gender</em>
                        </MenuItem>
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
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
    </div>
  );
}

export default Register;
