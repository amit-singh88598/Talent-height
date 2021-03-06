import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
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
    height: 250,
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

const videos = [
  {
    name: "Amit Singh",
    href: "https://www.youtube.com/watch?v=WzVMrgffjq0",
    title: "Bad Boys For Life !",
  },
  {
    name: "Akash Kumar",
    href: "https://www.youtube.com/watch?v=DMRRC0rwO_I",
    title: "All time best",
  },
  {
    name: "Kamal",
    href: "https://www.youtube.com/watch?v=fwbFdo0adHQ",
    title: "Be Unique",
  },
  {
    name: "Amit Singh",
    href: "https://www.youtube.com/watch?v=WzVMrgffjq0",
    title: "Bad Boys For Life !",
  },
  {
    name: "Akash Kumar",
    href: "https://www.youtube.com/watch?v=DMRRC0rwO_I",
    title: "All time best",
  },
  {
    name: "Kamal",
    href: "https://www.youtube.com/watch?v=fwbFdo0adHQ",
    title: "Be Unique",
  },
  {
    name: "Amit Singh",
    href: "https://www.youtube.com/watch?v=WzVMrgffjq0",
    title: "Bad Boys For Life !",
  },
  {
    name: "Akash Kumar",
    href: "https://www.youtube.com/watch?v=DMRRC0rwO_I",
    title: "All time best",
  },
  {
    name: "Kamal",
    href: "https://www.youtube.com/watch?v=fwbFdo0adHQ",
    title: "Be Unique",
  },
  {
    name: "Amit Singh",
    href: "https://www.youtube.com/watch?v=WzVMrgffjq0",
    title: "Bad Boys For Life !",
  },
  {
    name: "Akash Kumar",
    href: "https://www.youtube.com/watch?v=DMRRC0rwO_I",
    title: "All time best",
  },
  {
    name: "Kamal",
    href: "https://www.youtube.com/watch?v=fwbFdo0adHQ",
    title: "Be Unique",
  },
  {
    name: "Amit Singh",
    href: "https://www.youtube.com/watch?v=WzVMrgffjq0",
    title: "Bad Boys For Life !",
  },
  {
    name: "Akash Kumar",
    href: "https://www.youtube.com/watch?v=DMRRC0rwO_I",
    title: "All time best",
  },
  {
    name: "Kamal",
    href: "https://www.youtube.com/watch?v=fwbFdo0adHQ",
    title: "Be Unique",
  },
];

function HomeVideos(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.scroll} id="scroller">
        <Grid container spacing={2}>
          {videos.map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
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
                    height="170px"
                    url={item.href}
                  />
                  {/* </CardMedia> */}
                </CardActionArea>
                <div style={{ padding: 5, display: "flex" }}>
                  <Avatar
                    className={classes.large}
                    alt="A Sharp"
                    src="https://miro.medium.com/max/4260/1*uLRHo3iLlP_PYxdd6dX_Lw.jpeg"
                  />
                  <Typography style={{ marginLeft: 5 }} variant="body1">
                    {item.title}
                  </Typography>
                </div>
                <Typography
                  style={{ marginLeft: 50 }}
                  variant="body1"
                  color="secondary"
                >
                  {item.name}
                </Typography>
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
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default HomeVideos;
