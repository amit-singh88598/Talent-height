import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.mainCard}>
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          autoPlay={true}
          autoPlayInterval="2000"
        >
          <img src="/song3.jpg" className={classes.img} alt="" />
          <img src="/photo1.jpg" className={classes.img} alt="" />
          <img src="/profile2.jpg" className={classes.img} alt="" />
          <img src="/profile3.jpg" className={classes.img} alt="" />
        </AliceCarousel>
      </Card>
    </div>
  );
}
