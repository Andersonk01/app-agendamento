import { View, Text } from "react-native";
import React from "react";
import { TitleDescriptionContainer } from "./styled";
import { TitleDescriptionTitle, TitleDescriptionDescription } from "./styled";

type TitleDescriptionProps = {
  title: string;
  description: string;
};

export const TitleDescription = ({
  title = "",
  description = "",
}: TitleDescriptionProps) => {
  return (
    <TitleDescriptionContainer>
      <TitleDescriptionTitle>{title}</TitleDescriptionTitle>
      <TitleDescriptionDescription>{description}</TitleDescriptionDescription>
    </TitleDescriptionContainer>
  );
};
