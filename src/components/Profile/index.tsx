import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Wrapper, TitleText, DescriptionText } from "./styled";

export function Profile() {
  return (
    <Wrapper>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require("./img/dug.jpg")}
      />
      <TitleText> BeautyTime </TitleText>
      <DescriptionText>
        {" "}
        Onde o cuidado se transforma em uma{"\n"}experiência única!{" "}
      </DescriptionText>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 250,
    borderRadius: 200,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
});
