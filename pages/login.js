import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Header from "../layout/header";
import { regxUserName, regxPassword } from "../regular-Expression";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 350,
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
}));

function Login(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [data, setData] = useState(null);

  const handleChange = () => {
    if (!regxUserName.test(userName)) {
      setUserNameErr(true);
    } else if (!regxPassword.test(password)) {
      setPasswordErr(true);
    } else {
      const temp = data ? data : [];
      temp.push({ userName, password });
      setData(temp);
      console.log(data);
    }
  };

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
              //   marginTop: 40,
            }}
          >
            <Typography
              style={{
                padding: 20,
                marginTop: 40,
                fontSize: "2.2em",
                color: "#ffffff",
              }}
            >
              Welcome back !
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
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.fieldStyle}>
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
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Login;
