import { View, Text } from "react-native";
import React from "react";
import { Wrapper } from "./styled";
import { Title, Description } from "./styled";

type TitleDescriptionProps = {
  title: string;
  description: string;
};

export const TitleDescription = ({
  title = "",
  description = "",
}: TitleDescriptionProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
