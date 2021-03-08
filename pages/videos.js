import { Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Details from "../components/video/details";
import Video from "../components/video/video";
import Header from "../layout/header";
import WriteComments from "../components/video/writeComments";
import UserComments from "../components/video/userComments";
import RecomandedVideos from "../components/video/recomandedVideos";
import Footer from "../layout/footer";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 40,
  },
}));

function Videos(props) {
  const classes = useStyle();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Video />
            <Divider />
            <Details />
            <Divider />
            <WriteComments />
            <UserComments />
          </Grid>

          <Grid item xs={12} sm={4}>
            <RecomandedVideos />
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default Videos;
