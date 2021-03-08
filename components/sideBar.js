import {
  Button,
  Card,
  Link,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  scroll: {
    overflowY: "scroll",
    height: 540,
  },
  btnStyle: {
    color: "#170000",
  },
}));

const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/trending",
    name: "Trending",
  },
  {
    href: "/subscription",
    name: "Subscription",
  },
  {
    href: "/originals",
    name: "Originals",
  },
  {
    href: "/library",
    name: "Library",
  },
  {
    href: "/yourVideos",
    name: "Your Videos",
  },
  {
    href: "/history",
    name: "History",
  },
  {
    href: "/watchLater",
    name: "Watch Later",
  },
];

function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.scroll} id="scroller">
        <Card elevation={0}>
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.href} key={item.name}>
                  <Button fullWidth className={classes.btnStyle}>
                    {item.name}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
}

export default SideBar;
