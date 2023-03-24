import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { navData } from "../../Constants/data";

const Componunt = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const Contener = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

function NaveBar() {
  return (
    <Componunt>
      {navData.map((data) => (
        <Contener>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Contener>
      ))}
    </Componunt>
  );
}

export default NaveBar;
