import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    paddingBottom: 50,
  },
  scroll: {
    overflowY: "scroll",
    height: 650,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.scroll} id="scroller">
        <Card elevation={0}>
          <ButtonGroup
            fullWidth
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
          >
            <Button fullWidth>Home</Button>
            <Button fullWidth>Trending</Button>
            <Button fullWidth>Subscription</Button>
            <Button fullWidth>Original</Button>
            <Button fullWidth>Library</Button>
            <Button fullWidth>Your Videos</Button>
            <Button fullWidth>History</Button>
            <Button fullWidth>Watch Later</Button>
          </ButtonGroup>
        </Card>
      </div>
    </div>
  );
}

export default SideBar;
