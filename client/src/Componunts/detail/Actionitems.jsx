import styled from "@emotion/styled";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

///
import { loadRazorpay } from "../../rozarpay/loadPayment";

///
const LeftContainer = styled(Box)`
  min-width: 40%;
  // textAlign: center;
  padding: 40px 0 0 80px;
`;
const Image = styled("img")({
  width: "90%",
  padding: "15px",
});
const StyledButtone = styled(Button)`
  width: "46%";
  border-radius: 2px;
  height: 50px;
`;
const Actionitems = ({ product }) => {
  const [quantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = product;
  const navigate = useNavigate();
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  ///
  const buyNow = async () => {
    loadRazorpay(600);
  };

  ///

  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>

      <StyledButtone
        addItemToCart
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <ShoppingCartIcon /> Add to Cart
      </StyledButtone>
      <StyledButtone
        variant="contained"
        style={{ background: "#fb541b" }}
        onClick={() => buyNow()}
      >
        <FlashOnIcon /> Buy Now
      </StyledButtone>
    </LeftContainer>
  );
};

export default Actionitems;
