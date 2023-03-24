import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from "@mui/styles";
// import { ThemeProvider } from "@mui/styles";

//import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

const StyleHeader = styled(AppBar)`
  color: #20b2aa;
  height: 55px;
`;
const Componunt = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: inherit;
`;
const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  margin: 4,
});

const CustomButtonsWraper = styled(Box)`
  margin: 0 5% 0 auto;
`;
// const useStyle = makeStyles(() => ({
//   menuButton: {
//     display: "none",
//     [theme.breakpoints.down("sm")]: {
//       display: "block",
//     },
//   },
// }));

const Header = () => {
  // const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyleHeader>
      <Toolbar style={{ minHeight: 55 }}>
        {/* <IconButton>
          <MenuIcon />
        </IconButton> */}
        <Componunt to={"/"} style={{ textDecoration: "none" }}>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box sx={{ display: "flex" }}>
            <Subheading>
              Explor &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="sub-log" />
          </Box>
        </Componunt>
        <Search />
        <CustomButtonsWraper>
          <CustomButtons />
        </CustomButtonsWraper>
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
