import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import * as S from "./styled";
import * as ImagePicker from "expo-image-picker";
import { ButtonPlus } from "./components/ButtonPlus/styled";
import Ionicons from "@expo/vector-icons/Ionicons";

import { setSelectedImageUri } from "./components/SettImage";

export const SettingPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    if (!result.canceled) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setImage(result.assets[0]?.uri ?? null);
      setSelectedImageUri(result.assets[0]?.uri ?? null);
    } else {
      setImage(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <S.SettingContainer>
      {!image ? (
        <>
          {/* this is for pick an image section */}
          <View style={s.touch}>
            {isLoading ? (
              <View>
                <ActivityIndicator
                  color={"#e79e7df"}
                  animating
                  size={"large"}
                />
              </View>
            ) : (
              <Text>Escolha uma imagem</Text>
            )}
            <ButtonPlus onPress={pickImage}>
              <Ionicons name="add" size={60} color={"#f39"} />
            </ButtonPlus>
          </View>
        </>
      ) : (
        <View style={s.touch}>
          {/* // to display the image section */}
          <View style={s.touchImage}>
            <Image source={{ uri: image }} style={s.touchuri}></Image>
          </View>
          <ButtonPlus onPress={pickImage}>
            <Ionicons name="add" size={70} color={"#f39"} />
          </ButtonPlus>
          {/* <Button title="Apagar imagem" /> */}
        </View>
      )}
    </S.SettingContainer>
  );
};

const s = StyleSheet.create({
  touch: {
    position: "absolute",
    top: 100,
    width: 300,
    height: 300,

    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: "#ccc",
    backgroundColor: "#faa2a181",
    justifyContent: "center",
    alignItems: "center",
  },
  touchImage: {
    borderRadius: 200,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  touchuri: {
    height: "100%",
    width: "100%",
    borderRadius: 200,
  },
});
