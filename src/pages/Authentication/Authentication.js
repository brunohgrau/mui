import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";
import BasicMenu from "../../components/common/BasicMenu/BasicMenu";

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
      <NotificationBell
        iconColor="primary"
        badgeContent={0}
        anchorEl={anchorEl}
        onClick={handleOpen}
      />
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Grid>
  );
};

export default Authentication;
