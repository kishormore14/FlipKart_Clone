import { Fragment, useEffect } from "react";
import React from "react";
import NaveBar from "./NaveBar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NaveBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discount  of the Day" timer={false} />
        <Slide products={products} title="Suggesting items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recomended Itms" timer={false} />
      </Component>
    </>
  );
}

export default Home;
