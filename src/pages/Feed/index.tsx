import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

import { getSelectedImageUri } from "../Setting/components/SettImage";
import { useState, useEffect } from "react";

export const NextPage = () => {
  // const [image, setImage] = useState(null);
  // setImage(getSelectedImageUri());
  const [image, setImage] = useState<string | null>(null);

  const imageUri = getSelectedImageUri();

  useEffect(() => {
    setImage(imageUri);
  }, [imageUri]);

  // Verifica se há uma URI válida antes de renderizar a imagem
  if (!imageUri) {
    return <Text>Nenhuma imagem selecionada.</Text>;
  }

  return (
    <Image source={{ uri: image ?? "" }} style={{ width: 300, height: 300 }} />
  );
};

export const FeedPage = () => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <NextPage></NextPage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: "100%",
    backgroundColor: "#ccc",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
