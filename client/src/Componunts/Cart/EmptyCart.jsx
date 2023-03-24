import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import React from "react";
const Componunt = styled(Box)`
  width: 80%%;
  height: 65vh;
  background: #fff;
  margin: 80px 140px;
`;
const Image = styled("img")({ width: "15%" });
const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Componunt>
      <Container>
        <Image src={imgurl} alt="" />
        <Typography>Your cart is empty!</Typography>
        <span>Add items to it now.</span>
      </Container>
    </Componunt>
  );
};

export default EmptyCart;
