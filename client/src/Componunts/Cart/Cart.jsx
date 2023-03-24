import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";

//componunt
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";

////
import { loadRazorpay } from "../../rozarpay/loadPayment";

///

const Container = styled(Grid)`
  padding: 30px 135px;
  display: flex;
`;
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const ButtonWraper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;
const StyleButtone = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  /////

  const buyNow = async () => {
    loadRazorpay(500);
  };

  //////
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWraper>
              <StyleButtone onClick={() => buyNow()}>Place order</StyleButtone>
            </ButtonWraper>
          </Grid>
          <Grid item lg={3} md={3} sm={9} xs={9}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
