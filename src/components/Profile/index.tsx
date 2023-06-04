import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export function Profile() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require("./img/dug.jpg")}
      ></Image>
      <Text style={styles.text}>Anderson Kauer</Text>
      <Text style={styles.description}>Front-End developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontStyle: "italic",
  },
  description: {
    fontSize: 18,
    fontStyle: "italic",
  },
});
