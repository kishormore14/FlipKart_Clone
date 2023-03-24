import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Componunt = styled(Menu)`
  margintop: 40px;
`;
const Logout = styled(Typography)`
  fontsize: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Componunt anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>LogOut</Logout>
        </MenuItem>
      </Componunt>
    </>
  );
};

export default Profile;
