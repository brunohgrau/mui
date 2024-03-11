import React from "react";
import BasicModal from "../common/BasicModal/BasicModal";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => {
    console.log(data);
  };

  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      <TextField
        placeholder="User ID"
        name="userId"
        label="User Id"
        required
        {...register("userId")}
        error={errors.userId ? true : false}
        helperText={errors.userId?.message}
      />
      <TextField
        placeholder="Email"
        name="email"
        label="Email"
        required
        {...register("email")}
        error={errors.email ? true : false}
        helperText={errors.email?.message}
      />
      <TextField
        placeholder="Phone Number"
        name="phoneNumber"
        label="Phone Number"
        required
        {...register("phoneNumber")}
        error={errors.phoneNumber ? true : false}
        helperText={errors.phoneNumber?.message}
      />
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
        onSubmit={handleSubmit(addUser)}
      />
    </>
  );
};

export default NewUserModal;
