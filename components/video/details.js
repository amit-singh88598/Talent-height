import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  Grid,
  InputBase,
  useTheme,
  withStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 50,
    position: "relative",
    backgroundColor: "#f5f5f5",
    fontSize: 14,
    padding: "6px 18px 6px 20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 50,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  heading: {
    marginTop: 10,
    fontSize: "1.2em",
  },
  subscribersCount: {
    color: theme.palette.secondary.grey,
  },
  breakpoints: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  descriptionDetails: {
    marginBottom: 50,
    marginTop: 10,
    marginLeft: 80,
  },
  scroll: {
    overflowY: "scroll",
    height: 200,
  },
  mobbreakpoint: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  btnStyle: {
    backgroundColor: theme.palette.primary.background,
    color: "#ffffff",
    // pointerEvents: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.background,
    },
  },
}));

// Video Details Page

function Details(props) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div>
        <div>
          <div className={classes.breakpoints}>
            <Card elevation={0}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button onClick={() => router.push("")}>
                    <Avatar
                      alt="Remy Sharp"
                      src="profile.jpg"
                      className={classes.large}
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <a href={""} onClick={() => router.push("")}>
                        <Typography
                          className={classes.heading}
                          gutterBottom
                          variant="h6"
                        >
                          IncInk
                        </Typography>
                      </a>
                      <Typography
                        className={classes.subscribersCount}
                        gutterBottom
                        variant="subtitle2"
                      >
                        127K subscribers
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Button
                      variant="contained"
                      className={classes.btnStyle}
                      disableElevation
                      color="primary"
                      onClick={() => router.push("")}
                    >
                      subscribe
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
            <Typography
              variant="subtitle2"
              className={classes.descriptionDetails}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. placeat
              qui corporis!
            </Typography>
          </div>
          <div className={classes.mobbreakpoint}>
            <Card elevation={0}>
              <Grid container spacing={1}>
                <Grid item xs={2} sm={2}>
                  <Button onClick={() => router.push("")}>
                    <Avatar
                      alt="Remy Sharp"
                      src="profile.jpg"
                      className={classes.small}
                    />
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} container>
                  <div style={{ marginLeft: 25 }}>
                    <a href={""} onClick={() => router.push("")}>
                      <Typography
                        className={classes.heading}
                        gutterBottom
                        variant="subtitle1"
                      >
                        IncInk
                      </Typography>
                    </a>
                    <Typography gutterBottom variant="subtitle1">
                      127K subscribers
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    onClick={() => router.push("")}
                  >
                    subscribe
                  </Button>
                </Grid>
              </Grid>
            </Card>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. placeat
              qui corporis!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
