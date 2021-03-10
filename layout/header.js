import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toggleButton: {
    [theme.breakpoints.between("sm", "xl")]: {
      display: "none",
    },
  },
  navLink: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  sidebar: {
    backgrounColor: theme.palette.primary.main,
  },
  titleStyle: {
    fontSize: "1.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  AppBar: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const navLinks = [
  {
    href: "/login",
    name: "Login",
  },
  {
    href: "/register",
    name: "Register",
  },
];

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const list = () => (
    <div role="presentation" className={classes.sidebar}>
      <List>
        {navLinks.map((item, index) => (
          <ListItem key={index}>
            <a href={item.href} onClick={() => router.push(item.href)}>
              <Button
                style={{ color: "#000000", fontWeight: 900 }}
                color="primary"
              >
                {item.name}
              </Button>
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        className={classes.sidebar}
      >
        {list()}
      </SwipeableDrawer>

      <AppBar position="static" elevation={1} className={classes.AppBar}>
        <Toolbar>
          <a href="/login" onClick={() => router.push("/login")}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
              <img
                src="profile1.jpg"
                width="90"
                height="40"
                style={{ marginTop: 5, marginBottom: 5 }}
              />
            </IconButton>
          </a>
          {/* <Typography color="primary" className={classes.titleStyle}>
            Talent height
          </Typography> */}
          {/* <SearchBar /> */}
          <Typography variant="h6" className={classes.title} />
          <div style={{ display: "flex" }} className={classes.navLink}>
            {navLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href} onClick={() => router.push(item.href)}>
                  <Button
                    style={{
                      margin: 5,
                      color: "#000000",
                      fontWeight: 600,
                      fontSize: "0.8em",
                    }}
                    size="small"
                    color="inherit"
                  >
                    {item.name}
                  </Button>
                </a>
              </div>
            ))}
          </div>
          <IconButton
            edge="start"
            className={classes.toggleButton}
            onClick={toggleDrawer}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
