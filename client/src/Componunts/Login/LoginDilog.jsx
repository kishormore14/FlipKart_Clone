import React, { useState, useContext } from "react";
import {
  Dialog,
  TextField,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../service/api";
import { DataContext } from "../../context/DataProvider";

const Componunt = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 28%;
  &>p,&>h5{
    color:#ffffff;
    fontWeight: 600
  }
 
  }
`;
const Wraper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
   padding: 45px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
`;

const LoginButton = styled(Button)`
  texttransform: none;
  background: #fb641b;
  color: #fff;
  height: 48;
  borderradius: 2;
`;
const RequestOtp = styled(Button)`
  texttransform: none;
  background: #fff;
  color: #2874f0;
  height: 48;
  borderradius: 2;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
  color: #878787;
  fontsize: 12;
`;
const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  textalign: center;
  color: #2874f0;
  fontweight: 600;
  fontsize: 14;
  cursor: pointer;
`;

const Error = styled(Typography)`
  fontsize: 10px;
  color: #ff6161;
  lineheight: 0;
  margintop: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDilog = ({ open, setopen }) => {
  const handleClose = () => {
    setopen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const togglrSinup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);

    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
    //   handleClose();
    //   setAccount(response.data.username);
    // }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Componunt>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wraper>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              {error && <Error>Please Enter Valid UserName or password</Error>}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <CreateAccount
                onClick={() => {
                  togglrSinup();
                }}
              >
                New to Flipkart? Create an account
              </CreateAccount>
            </Wraper>
          ) : (
            <Wraper>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wraper>
          )}
        </Box>
      </Componunt>
    </Dialog>
  );
};

export default LoginDilog;
