import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 10,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const status = [
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    avatar: "/static/images/avatar/1.jpg",
  },
];

export default function Status() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {status.map((item, index) => (
        <div key={index}>
          <Avatar className={classes.large} alt="A Sharp" src={item.avatar} />
        </div>
      ))}
    </div>
  );
}
