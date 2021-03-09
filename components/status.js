import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 45,
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
    avatar:
      "https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&w=400&dpr=2.6",
  },
  {
    avatar:
      "https://cnet1.cbsistatic.com/img/WfkqAocgYhb8A85smYcTH_acFa8=/1200x630/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg",
  },
  {
    avatar: "https://miro.medium.com/max/4260/1*uLRHo3iLlP_PYxdd6dX_Lw.jpeg",
  },
  {
    avatar:
      "https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&w=400&dpr=2.6",
  },
  {
    avatar:
      "https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&w=400&dpr=2.6",
  },
  {
    avatar:
      "https://cnet1.cbsistatic.com/img/WfkqAocgYhb8A85smYcTH_acFa8=/1200x630/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg",
  },
  {
    avatar: "https://miro.medium.com/max/4260/1*uLRHo3iLlP_PYxdd6dX_Lw.jpeg",
  },
  {
    avatar:
      "https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&w=400&dpr=2.6",
  },
];

// Status Component

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
