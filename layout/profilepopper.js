import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Avatar, Link } from "@material-ui/core";
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
    href: "/",
    name: "Your Channel",
    icon: <Home style={{ marginRight: 10 }} />,
  },
  {
    href: "/trending",
    name: "Talent Height Studio",
    icon: <Whatshot style={{ marginRight: 10 }} />,
  },
  {
    href: "/subscription",
    name: "Switch Account",
    icon: <Subscriptions style={{ marginRight: 10 }} />,
  },
  {
    href: "/originals",
    name: "Sign Out",
    icon: <CropOriginal style={{ marginRight: 10 }} />,
  },
  {
    href: "/library",
    name: "Language",
    icon: <VideoLibrary style={{ marginRight: 10 }} />,
  },
  {
    href: "/yourVideos",
    name: "Location",
    icon: <OndemandVideo style={{ marginRight: 10 }} />,
  },
  {
    href: "/history",
    name: "Setting",
    icon: <History style={{ marginRight: 10 }} />,
  },
  {
    href: "/watchLater",
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
        <Avatar alt="Cindy Baker" src="profile.jpg" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
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
