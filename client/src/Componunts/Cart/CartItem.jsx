import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../Utils/CommonUtils";
import GroupButton from "./GroupButton";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Componunt = styled(Box)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0;
  display: flex;
  bacground: #fff;
`;

const LeftComponunt = styled(Box)`
  margin: 20px;
  display: flex;
  flexdirection: column;
`;
const SmallText = styled(Typography)`
  fontsize: 14px;
  color: #878787;
  margin-top: 20px;
`;
const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Componunt>
      <Box>
        <LeftComponunt>
          <img
            src={item.url}
            alt="product"
            style={{ height: 110, width: 110 }}
          />
        </LeftComponunt>
        <GroupButton />
      </Box>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText style={{ marginTop: 10 }}>
          Seller:RetailNet
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="" />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount} off
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Componunt>
  );
};

export default CartItem;
