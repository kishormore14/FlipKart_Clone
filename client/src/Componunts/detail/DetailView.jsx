import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import Actionitems from "./Actionitems";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;
const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
marginTop: 50px,
        '& > *': {
            marginTop: 10px
        }
`;

const DetailView = () => {
  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, product } = productDetails;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitems product={product} />
          </Grid>
          <RightContainer
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            style={{ marginTop: 40 }}
          >
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
