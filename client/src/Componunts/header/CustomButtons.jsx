import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState, useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
//Componunt import
import LoginDilog from "../Login/LoginDilog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Waper = styled(Box)`
  display: flex;
  color: #fff;
  margin: 0 3% 0auto;

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;
const Container = styled(Link)`
  display: flex;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  margin-left: 5px;
  padding: 5px 4px;
  height: 32px;
`;
const CustomButtons = () => {
  const [poen, setopen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const openDilog = () => {
    setopen(true);
  };

  return (
    <Waper>
      {account ? (
        // <Typography>
        //   {account}
        //   {console.log(account)}
        // </Typography>
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton
          variant="contained"
          onClick={() => {
            openDilog();
          }}
        >
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 5, width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTop: 5 }}>More</Typography>
      <Container
        to="/cart"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <AddShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDilog open={poen} setopen={setopen} />
    </Waper>
  );
};

export default CustomButtons;
