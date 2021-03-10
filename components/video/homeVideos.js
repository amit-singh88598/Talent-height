import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";

const useStyles = makeStyles((theme) => ({
  serviceName: {
    color: "#f5f5f5",
    fontSize: "1.3em",
  },
  serviceCard: {
    textAlign: "center",
    borderRadius: 10,
  },
  cardStyle: {
    height: 270,
  },
  scroll: {
    overflowY: "scroll",
    height: 600,
  },

  small: {
    marginTop: 5,
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  details: {
    display: "flex",
    fontSize: ".8em",
    Color: "#cccccc",
  },
}));

const videos = [
  {
    name: "Amit Singh",
    href: "song1.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Akash Kumar",
    href: "song2.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Kamal Singh",
    href: "song3.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Amit Singh",
    href: "song1.jpg",
    title: "Bad Boys For Life ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Akash Kumar",
    href: "song2.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Kamal Singh",
    href: "song3.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Amit Singh",
    href: "song1.jpg",
    title: "Bad Boys For Life ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Akash Kumar",
    href: "song2.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Kamal Singh",
    href: "song3.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Amit Singh",
    href: "song1.jpg",
    title: "Bad Boys For Life ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Akash Kumar",
    href: "song2.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Kamal Singh",
    href: "song3.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Amit Singh",
    href: "song1.jpg",
    title: "Bad Boys For Life ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Akash Kumar",
    href: "song2.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
  {
    name: "Kamal Singh",
    href: "song3.jpg",
    title: "Top 10 Songs of AR Rehman ! Best of 90's",
    views: "23K views .",
    time: "7 minutes ago",
  },
];

// Home Videos Component

function HomeVideos(props) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div>
      {/* <div className={classes.scroll} id="scroller"> */}
      <div id="scroller">
        <Grid container spacing={2}>
          {videos.map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Card elevation={2} className={classes.cardStyle}>
                <CardActionArea className={classes.serviceCard}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="170"
                    image={item.href}
                    onClick={() => router.push("/videos?v=WzVMrgffjq0")}
                    title="Contemplative Reptile"
                  ></CardMedia>
                </CardActionArea>
                <div style={{ padding: 5, display: "flex" }}>
                  <Avatar
                    className={classes.small}
                    alt="A Sharp"
                    src="https://miro.medium.com/max/4260/1*uLRHo3iLlP_PYxdd6dX_Lw.jpeg"
                    onClick={() => router.push("/")}
                  />
                  <a
                    href={""}
                    onClick={() => router.push("/videos?v=WzVMrgffjq0")}
                  >
                    <Typography
                      style={{
                        marginLeft: 10,
                        fontWeight: "bold",
                        marginTop: 5,
                      }}
                      variant="subtitle2"
                    >
                      {item.title}
                    </Typography>
                  </a>
                  <MoreVert style={{ marginLeft: 40 }} />
                </div>
                <Typography
                  style={{ marginLeft: 50, fontSize: ".8em", color: "#a9a9a9" }}
                  variant="body1"
                  // color="secondary"
                >
                  {item.name}
                </Typography>
                <div className={classes.details}>
                  <Typography
                    style={{
                      marginLeft: 50,
                      fontSize: ".9em",
                      color: "#a9a9a9",
                    }}
                    variant="subtitle2"
                    // color="secondary"
                  >
                    {item.views}
                  </Typography>
                  <Typography
                    style={{ fontSize: ".9em", color: "#a9a9a9" }}
                    variant="subtitle2"
                    // color="secondary"
                  >
                    {item.time}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default HomeVideos;
