import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
const Theame = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: "red",
  [theme.breakepoints.down("md")]: {
    backgroundColor: "Black",
  },
}));

const XXXX = () => {
  return (
    <Theame
      style={{ height: "300px", width: "300px", bgcolor: "primary.main" }}
    >
      jj
    </Theame>
  );
};

export default XXXX;
