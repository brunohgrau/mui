import React from "react";
import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/common/NotificationBell/NotificationBell";

const Authentication = () => {
  return (
    <Grid item xs={8}>
      Authentication Page
      <NotificationBell iconColor="primary" badgeContent={0} />
    </Grid>
  );
};

export default Authentication;
