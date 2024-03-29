import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BasicCard = ({ header, content }) => {
  const cardStyles = {
    width: "1000px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "8px",
  };

  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;
