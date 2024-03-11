import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";

import NewUserModal from "../../components/Modals/NewUserModal";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add User
          </CommonButton>

          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };
  const getContent = () => {
    return (
      <Typography
        align="center"
        sx={{
          margin: "40px 10px",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.3rem",
        }}
      >
        No users for this project yet
      </Typography>
    );
  };
  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal open={open} onClose={() => setOpen(false)} />
    </GridWrapper>
  );
};

export default Authentication;
