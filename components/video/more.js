import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {
  AvTimer,
  CropOriginal,
  History,
  Home,
  MoreVert,
  OndemandVideo,
  Subscriptions,
  VideoCall,
  VideoLibrary,
  Whatshot,
} from "@material-ui/icons";
import { Router } from "next/router";
import { Tooltip } from "@material-ui/core";

export default function More() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Options = [
    {
      name: "Add To Queue",
      icon: <Home style={{ marginRight: 10 }} />,
    },
    {
      name: "Save To Watch later",
      icon: <Whatshot style={{ marginRight: 10 }} />,
    },
    {
      name: "Save To Playlist",
      icon: <Subscriptions style={{ marginRight: 10 }} />,
    },
    {
      name: "Sign Out",
      icon: <CropOriginal style={{ marginRight: 10 }} />,
    },
    {
      name: "Not Interested",
      icon: <VideoLibrary style={{ marginRight: 10 }} />,
    },
    {
      name: "Location",
      icon: <OndemandVideo style={{ marginRight: 10 }} />,
    },
    {
      name: "Dont Recomand Channel",
      icon: <History style={{ marginRight: 10 }} />,
    },
    {
      name: "Report",
      icon: <AvTimer style={{ marginRight: 10 }} />,
    },
  ];

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // size="small"
        // style={{ marginTop: 5 }}
      >
        <Tooltip disableFocusListener disableTouchListener title="More">
          <MoreVert size="large" />
        </Tooltip>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        style={{ marginTop: 50 }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Options.map((item, index) => (
          <div key={index}>
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: 10,
              }}
              fullWidth
            >
              {item.icon}
              {item.name}
            </Button>
          </div>
        ))}
      </Menu>
    </div>
  );
}
