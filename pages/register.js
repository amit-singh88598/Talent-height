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
import axios from "axios";
import jsCookies from "js-cookies";
import React, { useState } from "react";
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
  // const [gender, setGender] = React.useState("");

  const [error, setError] = useState({
    userNameErr: false,
    emailErr: false,
    // phoneErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  // const [userNameErr, setUserNameErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);
  // const [phoneErr, setPhoneErr] = useState(false);
  // const [passwordErr, setPasswordErr] = useState(false);
  // const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  // const [data, setData] = useState(null);
  const [open, setOpen] = React.useState(false);

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
      if (res && res.data) {
        //to save token in cookies
        // cookies.setItem("talentHeight", res.data.token, { expires: 3 });
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
                        error.passwordErr ? "please enter valid Password" : ""
                      }
                      fullWidth
                      type="password"
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
                        error.passwordErr ? "please enter valid Password" : ""
                      }
                      fullWidth
                      type="password"
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
    </div>
  );
}

export default Register;

// import {
//   Button,
//   Card,
//   Container,
//   FormControl,
//   Grid,
//   InputLabel,
//   makeStyles,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import Axios from "axios";
// import Cookies from "js-cookies";
// import { useAuth } from "../auth";
// import Header from "../layout/header";
// import {
//   regxUserName,
//   regxEmail,
//   regxPhoneNumber,
//   regxPassword,
//   regxConfirmPassword,
// } from "../regular-Expression";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     paddingBottom: 150,
//     backgroundColor: "#ff148a",
//   },
//   button: {
//     display: "block",
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   btnStyle: {
//     backgroundColor: "#ffffff",
//     color: "#ff148a",
//     fontSize: "1.2em",
//   },
//   textFieldStyle: {
//     color: "#ffffff",
//   },
// }));

// function Register(props) {
//   const classes = useStyles();
//   const router = useRouter();
//   const { setUserData, setTokenData } = useAuth();
//   const [responseError, setResponseError] = useState(null);
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [gender, setGender] = React.useState("");

//   const [error, setError] = useState({
//     userNameErr: false,
//     emailErr: false,
//     phoneErr: false,
//     passwordErr: false,
//     confirmPasswordErr: false,
//   });

//   // const [userNameErr, setUserNameErr] = useState(false);
//   // const [emailErr, setEmailErr] = useState(false);
//   // const [phoneErr, setPhoneErr] = useState(false);
//   // const [passwordErr, setPasswordErr] = useState(false);
//   // const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

//   // const [data, setData] = useState(null);
//   const [open, setOpen] = React.useState(false);

//   const handleChange = () => {
//     if (!(userName != "" && regxUserName.test(userName))) {
//       setError({ userNameErr: true });
//     } else if (!(email != "" && regxEmail.test(email))) {
//       setError({ emailErr: true });
//     } else if (!(phone != "" && regxPhoneNumber.test(phone))) {
//       setError({ phoneErr: true });
//     } else if (!(password != "" && regxPassword.test(password))) {
//       setError({ passwordErr: true });
//     } else if (confirmPassword === "") {
//       setError({ confirmPasswordErr: true });
//     } else {
//       if (password !== confirmPassword) {
//         setError({ confirmPasswordErr: true });
//       } else {
//         const postData = { userName, email, phone, password };
//         userRegister(postData);
//       }
//     }
//   };

//   const userRegister = async (data) => {
//     try {
//       const res = await Axios.post(
//         `https://talentheight.herokuapp.com/api/users/register`,
//         data
//       );
//       console.log(data);
//       if (res != null && res.data.status) {
//         Cookies.set(
//           "talentheight",
//           { token: res.data.token, userType: "user" },
//           { expires: 7 }
//         );
//         const { data: user } = await Axios.get(
//           "https://talentheight.herokuapp.com/api/users/register",
//           {
//             headers: { Authorization: res.data.token },
//           }
//         );
//         if (user.status) {
//           setUserData(user.data);
//           setTokenData(res.data.token);
//           setOpen(false);
//           if (router.pathname === "/users/register") {
//             router.push("/");
//           }
//         }
//       } else {
//         setOpen(false);
//         setResponseError(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleGender = (event) => {
//     setGender(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ backgroundColor: "#ff148a" }}>
//         {responseError && <h1>{responseError}</h1>}
//         <Container>
//           <div
//             style={{
//               display: "flex",
//               textAlign: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Typography
//               style={{
//                 marginTop: 40,
//                 fontSize: "2.2em",
//                 color: "#ffffff",
//               }}
//             >
//               Let's get started!
//             </Typography>
//           </div>
//           <Grid style={{ paddingLeft: 150, paddingRight: 150, paddingTop: 20 }}>
//             <Grid item xs={12} sm={12}>
//               <Card className={classes.root} elevation={0}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       className={classes.textFieldStyle}
//                       style={{ marginTop: 10 }}
//                       onChange={(event) => {
//                         setUserNameErr(false);
//                         setUserName(event.target.value);
//                       }}
//                       error={error.userNameErr}
//                       helperText={
//                         userNameErr ? "Please enter valid User Name" : ""
//                       }
//                       fullWidth
//                       placeholder="User Name"
//                       autoFocus
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       color="primary"
//                       onChange={(event) => {
//                         setEmailErr(false);
//                         setEmail(event.target.value);
//                       }}
//                       error={error.emailErr}
//                       helperText={emailErr ? "Please enter valid email" : ""}
//                       fullWidth
//                       type="text"
//                       placeholder="Email"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       onChange={(event) => {
//                         setPhoneErr(false);
//                         setPhone(event.target.value);
//                       }}
//                       error={error.phoneErr}
//                       helperText={
//                         phoneErr ? "please enter valid Phone no." : ""
//                       }
//                       fullWidth
//                       placeholder="Phone no."
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <TextField
//                       variant="outlined"
//                       onChange={(event) => {
//                         setPasswordErr(false);
//                         setPassword(event.target.value);
//                       }}
//                       error={error.passwordErr}
//                       helperText={
//                         passwordErr ? "please enter valid Password" : ""
//                       }
//                       fullWidth
//                       type="password"
//                       id="password"
//                       placeholder="Password"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       onChange={(event) => {
//                         setPasswordErr(false);
//                         setPassword(event.target.value);
//                       }}
//                       error={error.confirmPasswordErr}
//                       helperText={
//                         passwordErr ? "please enter valid Password" : ""
//                       }
//                       fullWidth
//                       type="password"
//                       placeholder="Confirm Password"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <FormControl className={classes.formControl} fullWidth>
//                       <InputLabel id="demo-controlled-open-select-label">
//                         Gender
//                       </InputLabel>
//                       <Select
//                         labelId="demo-controlled-open-select-label"
//                         id="demo-controlled-open-select"
//                         open={open}
//                         onClose={handleClose}
//                         onOpen={handleOpen}
//                         value={gender}
//                         onChange={handleGender}
//                       >
//                         <MenuItem value="">
//                           <em>Gender</em>
//                         </MenuItem>
//                         <MenuItem value={10}>Male</MenuItem>
//                         <MenuItem value={20}>Female</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={12} className={classes.fieldStyle}>
//                     <Button
//                       variant="contained"
//                       className={classes.btnStyle}
//                       size="large"
//                       fullWidth
//                       onClick={handleChange}
//                     >
//                       Sign Up
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default Register;
