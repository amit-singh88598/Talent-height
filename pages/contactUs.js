import React from "react";
import Head from "next/head";
import {
  Card,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Header from "../layout/header";
import Footer from "../layout/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 120,
    paddingLeft: 90,
    paddingRight: 90,
    backgroundColor: "#79b321",
    marginTop: -22,
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
  },
  contentText: {
    color: theme.palette.primary.grey,
    fontSize: "1.1em",
    textAlign: "justify",
    textJustify: "interword",
    marginRight: 15,
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us | Talent-Height</title>
      </Head>
      <br />
      <Card className={classes.root} elevation={0}>
        <Typography
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: "2.2em",
            fontWeight: 9000,
          }}
        >
          Contact Us
        </Typography>
      </Card>
      <Container>
        <div>
          <Card className={classes.content} elevation={4}></Card>
        </div>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
}
