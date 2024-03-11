import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({ iconColor, badgeContent }) => {
  const newNotifications = `You have ${badgeContent} new notifications`;
  const noNotifications = "No new notifications";

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title={badgeContent ? newNotifications : noNotifications}>
        <IconButton
          color={iconColor}
          onClick={badgeContent ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge color="primary" badgeContent={badgeContent}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default NotificationBell;
