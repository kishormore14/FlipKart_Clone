import styled from "@emotion/styled";
import { Button, ButtonGroup } from "@mui/material";
//import ButtonGroup from "@mui/material";
import React from "react";

const Componunt = styled(ButtonGroup)`
  margin-top: 30px;
`;
const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupButton = () => {
  return (
    <Componunt>
      <StyledButton>-</StyledButton>
      <StyledButton disabled>1</StyledButton>
      <StyledButton>+</StyledButton>
    </Componunt>
  );
};

export default GroupButton;
