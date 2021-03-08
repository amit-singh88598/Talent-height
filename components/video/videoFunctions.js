import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  MoreHoriz,
  PlaylistAdd,
  Save,
  Share,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function VideoFunctions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Like" value="Like" icon={<ThumbUp />} />
      <BottomNavigationAction
        label="Disslike"
        value="Disslike"
        icon={<ThumbDown />}
      />
      <BottomNavigationAction
        label="Share"
        value="Share"
        icon={<Share size="small" />}
      />
      <BottomNavigationAction label="Add" value="Add" icon={<PlaylistAdd />} />
      <BottomNavigationAction label="More" value="More" icon={<MoreHoriz />} />
    </BottomNavigation>
  );
}
