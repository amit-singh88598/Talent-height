import {
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

const useStyles = makeStyles((theme) => ({
  serviceName: {
    color: "black",
    fontSize: "1.3em",
  },
  serviceCard: {
    // paddingTop: 30,
    // paddingBottom: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  cardStyle: {
    height: 230,
    // backgroundColor: theme.palette.secondary.main,
  },
  scroll: {
    overflowY: "scroll",
    height: 600,
  },
}));

const videos = [
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href: "https://images.indianexpress.com/2017/04/nature-tree_759.jpg",
  },
  {
    name: "hdbfjshbfsd",
    href:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZnur-mIToGsfW3-Tpg5ouccQd_i5TKiJFQ&usqp=CAU",
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
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="150"
                    image={item.href}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    Bad Boys For Life !
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
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
