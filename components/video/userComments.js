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
import { MoreVert } from "@material-ui/icons";

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
    marginTop: 40,
  },
  heading: {
    fontSize: "1.2em",
  },
  breakpoints: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  descriptionDetails: {
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 80,
  },
  mobbreakpoint: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function UserComments(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div>
        <div>
          <div className={classes.breakpoints}>
            <Card elevation={0}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button>
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
                      <div style={{ display: "flex" }}>
                        <Typography
                          className={classes.heading}
                          gutterBottom
                          variant="body1"
                        >
                          IncInk
                        </Typography>
                        <Typography
                          style={{ marginLeft: 20, color: "#a9a9a9" }}
                          gutterBottom
                          variant="subtitle2"
                        >
                          3 months ago
                        </Typography>
                      </div>
                      <Typography gutterBottom variant="subtitle2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit
                        sunt quaerat, odit, tenetur error, harum nesciunt ipsum
                        debitis quas aliquid. placeat qui corporis!
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Button variant="contained" elevation={0}>
                      <MoreVert />
                    </Button>
                    {/* <Grid style={{ marginTop: 70 }}>
                        <Rating
                          name="read-only"
                          value="asbjbhasjdsa"
                          size="small"
                          readOnly
                        />
                      </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </div>
          <div className={classes.mobbreakpoint}>
            <Card elevation={0}>
              <Grid container spacing={1}>
                <Grid item xs={2} sm={2}>
                  <Button>
                    <Avatar
                      alt="Remy Sharp"
                      src="profile.jpg"
                      className={classes.small}
                    />
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} container>
                  <div style={{ marginLeft: 25 }}>
                    <Typography
                      className={classes.heading}
                      gutterBottom
                      variant="body2"
                    >
                      IncInk
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      127K subscribers
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                  >
                    subscribe
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComments;
