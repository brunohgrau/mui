import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const BasicMenu = ({ anchorEl, open, handleClose, menuItems }) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default BasicMenu;
