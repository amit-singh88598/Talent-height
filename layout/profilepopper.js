import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Avatar, Link, Tooltip } from "@material-ui/core";
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

const navLinks = [
  {
    href: "/profilePopper/yourChannel",
    name: "Your Channel",
    icon: <Home style={{ marginRight: 10 }} />,
  },
  {
    href: "/profilePopper/talentHeightStudio",
    name: "Talent Height Studio",
    icon: <Whatshot style={{ marginRight: 10 }} />,
  },
  {
    href: "/",
    name: "Switch Account",
    icon: <Subscriptions style={{ marginRight: 10 }} />,
  },
  {
    href: "/login",
    name: "Sign Out",
    icon: <CropOriginal style={{ marginRight: 10 }} />,
  },
  {
    href: "/",
    name: "Language",
    icon: <VideoLibrary style={{ marginRight: 10 }} />,
  },
  {
    href: "/",
    name: "Location",
    icon: <OndemandVideo style={{ marginRight: 10 }} />,
  },
  {
    href: "/profilePopper/setting",
    name: "Setting",
    icon: <History style={{ marginRight: 10 }} />,
  },
  {
    href: "/",
    name: "Send Feedback",
    icon: <AvTimer style={{ marginRight: 10 }} />,
  },
];

export default function ProfilePopper() {
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
      >
        <Tooltip disableFocusListener disableTouchListener title="Profile">
          <Avatar alt="Cindy Baker" src="profile.jpg" />
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
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              style={{ textDecoration: "none" }}
              href={item.href}
              key={item.name}
            >
              <Button
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: 20,
                }}
                fullWidth
              >
                {item.icon}
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </Menu>
    </div>
  );
}
