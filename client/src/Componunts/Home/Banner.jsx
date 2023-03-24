import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../Constants/data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      infinite={true}
      draggable={false}
      autoPlaySpeed={3000}
      showDots={true}
      keyBoardControl={true}
      responsive={responsive}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data) => (
        <img
          src={data.url}
          alt="Banner"
          style={{ height: 250, width: "100%" }}
        />
      ))}
    </Carousel>
  );
};

export default Banner;

// const RightComponent = styled(Box)(({ theme }) => ({
//   marginTop: 12,
//   background: "#ffffff",
//   width: "17%",
//   marginLeft: 10,
//   textAlign: "center",
//   padding: 5,
//   [theme.breakpoints.down("md")]: {
//     display: "none",
//   },
// }));

// const LeftComponent = styled(Box)(({ theme }) => ({
//   width: "83%",
//   [theme.breakpoints.down("md")]: {
//     width: "100%",
//   },
// }));

// const Image = styled("img")(({ theme }) => ({
//   marginTop: "10px",
//   width: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("md")]: {
//     objectFit: "cover",
//     height: "120px",
//   },
// }));

// const Image = styled("img")(({ theme }) => ({
//   width: "100%",
//   height: 280,
//   [theme.breakpoints.down("sm")]: {
//     objectFit: "cover",
//     height: 180,
//   },
// }));
