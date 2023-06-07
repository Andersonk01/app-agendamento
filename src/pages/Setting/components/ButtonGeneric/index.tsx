import React from "react";
import { ButtonContainer } from "./styled";
import { ButtonText } from "./styled";
type ButtonProps = {
  name?: string;
};

export const ButtonGeneric = ({ name }: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonText>{name}</ButtonText>
    </ButtonContainer>
  );
};
