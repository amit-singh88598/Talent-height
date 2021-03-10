import {
  Card,
  CardActionArea,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import ReactPlayer from "react-player";
import Details from "./details";
import VideoFunctions from "./videoFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 40,
  },
  serviceName: {
    color: "#f5f5f5", //black
    fontSize: "1.3em",
  },
  serviceCard: {
    textAlign: "center",
    borderRadius: 10,
  },
  cardStyle: {
    height: 550,
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
  const router = useRouter();
  const { v } = router.query;
  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.cardStyle}>
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
            url={"https://www.youtube.com/watch?v=" + v}
          />
          {/* </CardMedia> */}
        </CardActionArea>
        <div style={{ display: "flex" }}>
          <Typography style={{ marginTop: 10, fontSize: "1.3em" }} variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
            volutpat ipsum.
          </Typography>
        </div>
        <div style={{ display: "flex", marginTop: 10, marginBottom: 50 }}>
          <Typography style={{ color: "#656565" }} variant="subtitle2">
            12,45,745
          </Typography>
          <Typography
            style={{ marginLeft: 10, color: "#656565" }}
            variant="subtitle2"
          >
            views :
          </Typography>
          <Typography
            style={{ marginLeft: 10, color: "#656565" }}
            variant="subtitle2"
          >
            Jan 19, 2021
          </Typography>
          <VideoFunctions />
        </div>
      </Card>
    </div>
  );
}

export default Video;
