import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: theme.palette.primary.main,
    marginTop: 60,
  },
  mainCard: {
    padding: 10,
  },
  img: {
    width: "100%",
    height: 600,
    objectFit: "cover",
  },
}));

// Banner Component For Home Page

export default function Banner() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.mainCard}>
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          autoPlay={true}
          autoPlayInterval="2000"
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="170"
            className={classes.img}
            image="photo1.jpg"
            onClick={() => router.push("/videos?v=WzVMrgffjq0")}
            title="Contemplative Reptile"
          />
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="170"
            className={classes.img}
            image="profile2.jpg"
            onClick={() => router.push("/videos?v=WzVMrgffjq0")}
            title="Contemplative Reptile"
          />
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="170"
            className={classes.img}
            image="photo1.jpg"
            onClick={() => router.push("/videos?v=WzVMrgffjq0")}
            title="Contemplative Reptile"
          />
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="170"
            className={classes.img}
            image="profile2.jpg"
            onClick={() => router.push("/videos?v=WzVMrgffjq0")}
            title="Contemplative Reptile"
          />
        </AliceCarousel>
      </Card>
    </div>
  );
}
