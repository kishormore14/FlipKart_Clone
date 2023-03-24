import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  styled,
  TableCell,
} from "@mui/material";
//import { Table } from "@mui/material";

import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  ertical-align: baseline;
  & > * {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBatch = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <Box>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <span>
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" />
        </span>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount} off
        </Box>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <StyledBatch />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <StyledBatch />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <StyledBatch />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <StyledBatch />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProductDetail;
