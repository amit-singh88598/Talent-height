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
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

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
        // className={classes.btn}
        label="Disslike"
        value="Disslike"
        icon={<ThumbDown />}
      />
      <Tooltip disableFocusListener disableTouchListener title="Share">
        <BottomNavigationAction
          label="Share"
          value="Share"
          icon={<Share size="small" />}
        />
      </Tooltip>
      <Tooltip disableFocusListener disableTouchListener title="Add">
        <BottomNavigationAction
          label="Add"
          value="Add"
          icon={<PlaylistAdd />}
        />
      </Tooltip>
      <Tooltip disableFocusListener disableTouchListener title="More">
        <BottomNavigationAction
          label="More"
          value="More"
          icon={<MoreHoriz />}
        />
      </Tooltip>
    </BottomNavigation>
  );
}
