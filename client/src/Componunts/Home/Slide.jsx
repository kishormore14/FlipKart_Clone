import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Componunt = styled(Box)`
  margin-top: 12px;
  background: #ffffff;
`;
const Deel = styled(Box)`
  display: flex;
  padding: 15px 20px;
`;

const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 10px;
  display: flex;
  alignitems: center;
  [theme.breakpoints.down(sm)]: {
    display: none;
  }
`;
const Deeltext = styled(Typography)`
  font-size: 22;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    " https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Componunt>
      <Deel>
        <Deeltext>{title}</Deeltext>
        {timer && (
          <Timer>
            <img src={timerURL} style={{ width: 24 }} alt="time clock" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deel>
      <Divider />

      <Carousel
        swipeable={false}
        infinite={true}
        draggable={false}
        autoPlaySpeed={3000}
        showDots={true}
        keyBoardControl={true}
        centerMode={true}
        responsive={responsive}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Componunt>
  );
};

export default Slide;
