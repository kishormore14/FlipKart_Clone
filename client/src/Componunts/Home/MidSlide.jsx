import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  width: 83%;
  [theme.breakpoints.down(md)]: {
    width: 100%;
  }
`;

const RightComponent = styled(Box)`
  margin-top: 12px;
  background: #ffffff;
  width: 17%;
  margin-left: 10px;
  padding: 5px;
  [theme.breakpoints.down(md)]: {
    display: none;
  }
`;

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <Box>
        <RightComponent>
          <img src={adURL} style={{ width: 232 }} alt="ad" />
        </RightComponent>
      </Box>
    </Component>
  );
};

export default MidSlide;
