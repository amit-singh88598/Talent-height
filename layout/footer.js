import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.textStyle}>
            Copyright © 2021 Talent Height. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.textStyle}>
            Copyright © 2021 Talent Height. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
