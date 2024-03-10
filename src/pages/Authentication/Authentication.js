import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../components/common/CommonButton/CommonButton";

const Authentication = () => {
  const buttonStyles = {
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "009be5",
      "&:hover": {
        backgroundColor: "006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Grid item xs={8}>
      <CommonButton variant="contained" sx={buttonStyles}>
        Add User
      </CommonButton>
      <CommonButton variant="outlined" sx={buttonStyles}>
        Web Setup
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
