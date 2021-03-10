import {
  Box,
  Chip,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },
  cityStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: "1em",
    backgroundColor: "#ffffff",
  },
}));

const footerLinks = [
  {
    href: "/terms",
    name: "Terms of use",
  },
  {
    href: "/privacy",
    name: " Privacy Policy",
  },
  {
    href: "/about",
    name: "About Us",
  },
  {
    href: "/contactUs",
    name: " Contact us",
  },
];

// Footer Component

function Footer(props) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.textStyle}>
            Copyright © 2021 Talent Height. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexWrap="wrap"
            alignContent="flex-start"
            className={classes.textStyle}
          >
            {footerLinks.map((item, index) => (
              <div key={index}>
                <a
                  className={classes.cityStyle}
                  href={item.href}
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </a>
                {/* <Link style={{ textDecoration: "none" }} href={item.href}> */}
                {/* <Chip
                    className={classes.cityStyle}
                    size="small"
                    label={item.name}
                  />
                </Link> */}
              </div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
