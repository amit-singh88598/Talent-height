import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  Grid,
  InputBase,
  Paper,
  useTheme,
  withStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import ReactPlayer from "react-player";
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
    marginTop: 10,
  },
  heading: {
    color: theme.palette.secondary.light,
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
}));

function RecomandedVideos(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div>
        <Link href="/">
          <div>
            <div className={classes.breakpoints}>
              <Card elevation={0}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <ReactPlayer
                      light={true}
                      // playing={false}
                      // volume={null}
                      width="100%"
                      height="120px"
                      url="https://www.youtube.com/watch?v=WzVMrgffjq0"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div style={{ display: "flex" }}>
                      <Typography variant="h6">
                        Justin Bieber - Hold On
                      </Typography>
                      <Button>
                        <MoreVert />
                      </Button>
                    </div>
                    <Typography variant="body2">Justin Bieber</Typography>
                    <div style={{ display: "flex", marginTop: 20 }}>
                      <Typography variant="body2">127 M Views . </Typography>
                      <Typography variant="body2" style={{ marginLeft: 20 }}>
                        1 Month
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RecomandedVideos;
