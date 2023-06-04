import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Wrapper, TextBox } from "./styles";
import { View } from "react-native";

// TODO: Falta tipar o source, pois pede um tipo require() do  ImageSourcePropType para o source
// source é uma fonte de imagem válida do tipo ImageSourcePropType

type boxProps = {
  name: string;
  children?: React.ReactNode;
  corFundo?: ImageSourcePropType | undefined;
};

// const minhaImagem = require("../../assets/services.png");
// { uri: JSON.stringify(corFundo) }

function Box({
  name = "",
  children,
  corFundo,
}: boxProps & ImageSourcePropType) {
  // const source: ImageSourcePropType = { uri: require("./assets/book.png") };

  return (
    <Wrapper>
      <View style={s.imagem}>{children}</View>

      <TextBox>{name}</TextBox>
    </Wrapper>
  );
}

export default Box;

const s = StyleSheet.create({
  imagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 60,
  },
});
