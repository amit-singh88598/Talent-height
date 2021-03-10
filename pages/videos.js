import { Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Details from "../components/video/details";
import Video from "../components/video/video";
import SideBar from "../layout/sideBar";
import WriteComments from "../components/video/writeComments";
import UserComments from "../components/video/userComments";
import RecomandedVideos from "../components/video/recomandedVideos";
import Footer from "../layout/footer";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 40,
    marginTop: 50,
  },
}));

// Videos Page

function Videos(props) {
  const classes = useStyle();
  return (
    <div>
      {/* Sidebar Contains sideBar and header */}
      <SideBar />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {/* Main Video Component */}
            <Video />
            <Divider />
            {/* Main Video Details  */}
            <Details />
            <Divider />
            {/* Main Video Comments option where user can give comments */}
            <WriteComments />
            {/* Main Video Comments section where viewers can see other comments */}
            <UserComments />
          </Grid>

          <Grid item xs={12} sm={4}>
            {/* Recomanded Videos showing on right side of the page */}
            <RecomandedVideos />
          </Grid>
        </Grid>
      </div>
      <Divider />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Videos;
