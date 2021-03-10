import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Avatar, Link, Tooltip } from "@material-ui/core";
import {
  AvTimer,
  CloudUpload,
  CropOriginal,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  VideoCall,
  VideoLibrary,
  Whatshot,
} from "@material-ui/icons";

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
          <Link style={{ textDecoration: "none" }} href="/uploads">
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                //   padding: 20,
              }}
              fullWidth
            >
              <Home style={{ marginRight: 10 }} />
              Upload Video
            </Button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
