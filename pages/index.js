import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import SideBar from "../layout/sideBar";
import Status from "../components/status";
import Footer from "../layout/footer";
import { useRouter } from "next/router";
import { useAuth } from "../auth";
import HomeVideos from "../components/video/homeVideos";
import Header from "../layout/header";
import Banner from "../components/banner";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  searchBar: {
    paddingLeft: 150,
    paddingRight: 150,
    margin: 20,
  },
  filterButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  // Mobile View Style

  mobileView: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

// Home Page

export default function Home() {
  const classes = useStyles();
  const { isAuthenticatedUser } = useAuth();
  const router = useRouter();
  return (
    <div>
      {isAuthenticatedUser == false ? (
        <div>
          <Button onClick={() => router.push("/login")}>Login first</Button>
        </div>
      ) : (
        <div>
          <div className={classes.desktopView}>
            {/* Sidebar contains header and side toggle */}
            <SideBar />
            <div className={classes.root}>
              <Grid container spacing={2}>
                {/* <Grid item xs={1} sm={1}>
            <SideBar />
                </Grid> */}
                <Grid item xs={12} sm={12}>
                  <div className={classes.searchBar}>{/* <SearchBar /> */}</div>
                  <Banner />
                  <div className={classes.img}>
                    <Status />
                  </div>
                  {/* Home Videos component */}
                  <HomeVideos />
                </Grid>
              </Grid>
            </div>
            <Divider />
            <Footer />
          </div>

          {/* Mobile View Starts here */}

          <div className={classes.mobileView}>
            <Header />
            <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={2} sm={2}>
                  <SideBar />
                </Grid>
                <Grid item xs={10} sm={10}>
                  <div className={classes.searchBar}>{/* <SearchBar /> */}</div>
                  <div className={classes.img}>
                    <Status />
                  </div>
                  {/* Home Videos component */}
                  <HomeVideos />
                </Grid>
              </Grid>
            </div>

            {/* Mobile Video ends here */}

            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
