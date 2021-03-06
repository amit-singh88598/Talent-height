import {
  Avatar,
  Card,
  CardActionArea,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import Header from "../layout/header";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: 40,
    padding: 40,
  },
  serviceName: {
    color: "#f5f5f5", //black
    fontSize: "1.3em",
  },
  serviceCard: {
    // paddingTop: 30,
    // paddingBottom: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  cardStyle: {
    height: 600,
    // backgroundColor: theme.palette.secondary.main,
  },
  scroll: {
    overflowY: "scroll",
    height: 600,
  },

  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

function Video(props) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={2}>
          {/* {videos.map((item, index) => ( */}
          <Grid item xs={12} sm={9}>
            <Card elevation={2} className={classes.cardStyle}>
              <CardActionArea className={classes.serviceCard}>
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="170"
                    image={item.href}
                    title="Contemplative Reptile"
                  > */}
                <ReactPlayer
                  light={true}
                  // playing={false}
                  // volume={null}
                  width="100%"
                  height="432px"
                  url="https://www.youtube.com/watch?v=VNs_cCtdbPc"
                />
                {/* </CardMedia> */}
              </CardActionArea>
              <div style={{ padding: 5, display: "flex" }}>
                <Typography style={{ padding: 10 }} variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  id volutpat ipsum.
                </Typography>
              </div>
              <div style={{ padding: 5, display: "flex" }}>
                <Typography
                  style={{ marginLeft: 10, color: "#656565" }}
                  variant="body1"
                >
                  12,45,745
                </Typography>
                <Typography
                  style={{ marginLeft: 10, color: "#656565" }}
                  variant="body1"
                >
                  Views :
                </Typography>
                <Typography
                  style={{ marginLeft: 10, color: "#656565" }}
                  variant="body1"
                >
                  06/03/2021
                </Typography>
              </div>
              {/* <CardActions>
                  <Button size="small" color="secondary">
                    Share
                  </Button>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions> */}
            </Card>
          </Grid>
          {/* ))} */}
        </Grid>
      </div>
    </div>
  );
}

export default Video;
