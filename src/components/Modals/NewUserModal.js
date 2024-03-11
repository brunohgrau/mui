import React from "react";
import BasicModal from "../common/BasicModal/BasicModal";
import { Input, Box } from "@mui/material";

const NewUserModal = ({ open, onClose, content }) => {
  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      "MuiInput-root": {
        marginBottom: "20px",
      },
    },
  };
  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      <Input placeholder="E-mail" />
      <Input placeholder="Phone Number" />
      <Input placeholder="User Id" />
    </Box>
  );
  return (
    <>
      <BasicModal
        open={open}
        onClose={onClose}
        title="New User"
        subTitle="Fill out inputs and hit Submit"
        content={getContent()}
        validate={() => {}}
      ></BasicModal>
    </>
  );
};

export default NewUserModal;
