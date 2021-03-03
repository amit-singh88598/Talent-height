import { Button, Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import HomeVideos from "../components/homeVideos";
import SearchBar from "../components/search";
import SideBar from "../components/sideBar";
import Status from "../components/status";
import Footer from "../layout/footer";
import Header from "../layout/header";

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
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={10}>
            <div className={classes.searchBar}>
              <SearchBar />
            </div>
            <Status />
            <HomeVideos />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
