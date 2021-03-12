import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  AvTimer,
  CropOriginal,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  VideoLibrary,
  Whatshot,
} from "@material-ui/icons";
import { useRouter } from "next/router";
import UploadPopper from "../sideBar/uploadPopper";
import ProfilePopper from "../sideBar/profilepopper";
import SearchBar from "../../components/searchBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  btnStyle: {
    padding: 5,
    color: theme.palette.secondary.grey,
  },

  root: {
    flexGrow: 1,
  },
  toggleButton: {
    [theme.breakpoints.between("sm", "xl")]: {
      display: "none",
    },
  },
  navLink: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const navLinks = [
  {
    href: "/",
    name: "Home",
    icon: <Home style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/trending",
    name: "Trending",
    icon: <Whatshot style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/subscription",
    name: "Subscription",
    icon: <Subscriptions style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/originals",
    name: "Originals",
    icon: <CropOriginal style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/library",
    name: "Library",
    icon: <VideoLibrary style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/yourVideos",
    name: "Your Videos",
    icon: <OndemandVideo style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/history",
    name: "History",
    icon: <History style={{ marginRight: 10 }} />,
  },
  {
    href: "/SidebarPages/watchLater",
    name: "Watch Later",
    icon: <AvTimer style={{ marginRight: 10 }} />,
  },
];

const navLink = [
  // {
  //   href: "/",
  //   name: "Home",
  // },
];

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <a href="/" onClick={() => router.push("/")}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <img src="/talent.png" width="60" height="40" />
            </IconButton>
          </a>
          <div
            style={{
              marginLeft: "auto",
              marginRight: 350,
              justifyContent: "Center",
              justifyContent: "Center",
            }}
          >
            <SearchBar />
          </div>

          <div style={{}}>
            <div
              position="relative"
              style={{ display: "flex" }}
              className={classes.navLink}
            >
              {/* {navLink.map((item) => (
                <Link
                  style={{ textDecoration: "none" }}
                  href={item.href}
                  key={item.name}
                >
                  <Button
                    position="relative"
                    style={{ margin: 5, marginLeft: "auto" }}
                    size="small"
                    // color="secondary"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))} */}

              {/* Upload Video */}

              <UploadPopper />

              {/* User Profile Popper */}

              <ProfilePopper />
            </div>
          </div>
          <IconButton
            edge="start"
            className={classes.toggleButton}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* </Toolbar> */}
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item, index) => (
            <div key={index}>
              <a href={item.href} onClick={() => router.push(item.href)}>
                <ListItem button>
                  <ListItemIcon className={classes.btnStyle}>
                    {item.icon}
                    {item.name}
                  </ListItemIcon>
                </ListItem>
              </a>
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
