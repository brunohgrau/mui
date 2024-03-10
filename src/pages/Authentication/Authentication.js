import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentication = () => {
  const buttonStyles = {};

  return (
    <Grid item xs={8}>
      <CommonButton variant="contained">Add User</CommonButton>
      <CommonButton variant="outlined">Web Setup</CommonButton>
      <CommonButton variant="contained" color="primary">
        Primary
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
