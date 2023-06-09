import { StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";
import { Wrapper, TextBox, TextB } from "./styles";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type boxProps = {
  name: string;
  children?: React.ReactNode;
};

export function Box({ name = "", children }: boxProps & ImageSourcePropType) {
  return (
    <Wrapper>
      <View style={S.imagem}>{children}</View>

      <TextBox>
        <TextB>{name}</TextB>
      </TextBox>

      <View style={S.icon}>
        <Ionicons name="arrow-up" size={35} color={"#EE1D52"} />
      </View>
    </Wrapper>
  );
}

const S = StyleSheet.create({
  imagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
