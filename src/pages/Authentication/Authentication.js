import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import Avatar from "@mui/material/Avatar";

const Authentication = () => {
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
    <Grid item xs={8}>
      Authentication Page
      <CommonButton variant="default">Go to Docs</CommonButton>
      <NotificationBell
        iconColor="primary"
        badgeContent={4}
        anchorEl={anchorEl}
        onClick={handleOpen}
      />
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </Grid>
  );
};

export default Authentication;
