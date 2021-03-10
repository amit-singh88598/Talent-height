import {
  Avatar,
  Button,
  Card,
  Container,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { PhotoCamera, Publish } from "@material-ui/icons";
import React from "react";
import SideBar from "../layout/sideBar";

const useStyle = makeStyles((theme) => ({
  paperStyle: {
    backgroundColor: theme.palette.primary.background,
    color: "#ffffff",
    padding: 20,
    fontSize: "1.5em",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    // marginTop: 100,
  },
  input: {
    display: "none",
  },
  txtStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.grey,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

// Video Upload Page

function Uploads(props) {
  const classes = useStyle();
  return (
    <div>
      <SideBar />
      <Container>
        <Card style={{ marginTop: 100, height: 600 }} elevation={5}>
          <Paper className={classes.paperStyle}>Upload Videos</Paper>
          <div className={classes.root} style={{ marginTop: 130 }}>
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="upload.png"
                  className={classes.large}
                />
              </IconButton>

              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
            </label>
          </div>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            Drag and drop video files to upload
          </Typography>
          <Typography className={classes.txtStyle} variant="body2">
            Your videos will be private until you publish them.
          </Typography>
          <div className={classes.root} style={{ marginTop: 50 }}>
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                SELECT FILE
              </Button>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <Typography>
              By submitting your videos to Talent Height you acknowledge that
              you agree to Talent Height :
            </Typography>
            <Link href="/terms" style={{ textDecoration: "none" }}>
              <Typography>Terms of Service</Typography>
            </Link>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <Typography>
              Please be sure not to violate others' copyright or privacy rights.
            </Typography>
            <Link href="/terms" style={{ textDecoration: "none" }}>
              <Typography>Learn more</Typography>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Uploads;
