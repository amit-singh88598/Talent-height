import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
} from "@material-ui/core";
import HomeVideos from "../components/homeVideos";
import SideBar from "../components/sideBar";
import Status from "../components/status";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { useRouter } from "next/router";
import { useAuth } from "../auth";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    // backgroundColor: "#f5f5f5",
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
                    {/* <ImageOverlay
                url={props.data.image}
                onClick={handleImageUpload}
              /> */}
                  </div>
                  <HomeVideos />
                </Grid>
              </Grid>
            </div>
            <Divider />
            <Footer />
          </div>

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
                    {/* <ImageOverlay
                url={props.data.image}
                onClick={handleImageUpload}
              /> */}
                  </div>
                  <HomeVideos />
                </Grid>
              </Grid>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
