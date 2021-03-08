import { Avatar, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 20,
  },
  commentBox: {
    display: "flex",
    marginTop: 20,
  },
  filter: {
    marginLeft: 20,
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

function WriteComments(props) {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root}>
        <Typography>10,214 Comments</Typography>
        <Typography className={classes.filter} variant="subtitle2">
          SORT By
        </Typography>
      </div>
      <div className={classes.commentBox}>
        <Avatar alt="Remy Sharp" src="profile.jpg" className={classes.large} />
        <TextField
          id="standard-full-width"
          style={{ marginLeft: 20 }}
          placeholder="Add a public comment ..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
}

export default WriteComments;
