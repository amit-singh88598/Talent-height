import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Tooltip } from "@material-ui/core";
import { Home, VideoCall } from "@material-ui/icons";
import { Router } from "next/router";

export default function UploadPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // size="small"
        style={{ marginTop: 5 }}
      >
        <Tooltip disableFocusListener disableTouchListener title="Create">
          <VideoCall size="large" />
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
        <div>
          <a
            href="/uploadVideos"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={() => Router.push("/uploadVideos")}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: 15,
              }}
              fullWidth
            >
              <Home style={{ marginRight: 10 }} />
              Upload Video
            </Button>
          </a>
        </div>
      </Menu>
    </div>
  );
}
