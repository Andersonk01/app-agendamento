import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";
import * as S from "./styled";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ButtonPlus } from "./components/ButtonPlus/styled";
import { ButtonGeneric } from "./components/ButtonGeneric";
import { Profile } from "../../components/Profile";
// import { setSelectedImageUri } from "./components/SettImage";
import { TitleDescription } from "./components/TitleDescription";
import { uploadBytes, ref } from "firebase/storage";

import { Ref } from "react";

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
      setImage(result.assets[0]?.uri ?? null); //! tirei a image local
      // const uploadURL = uploadImageAsync(result.assets[0]?.uri ?? null); //! enviando para o firebase
      // setImage(uploadURL ?? null);
      // SelectedImage(result.assets[0]?.uri ?? null);
    } else {
      setImage(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  // ! Consertar o codigo de upload para o firebase, erro no xml

  // const uploadImageAsync = async (uri: any) => {
  //   const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function () {
  //       resolve(xhr.response);
  //     };
  //     xhr.onerror = function (e) {
  //       console.log(e);
  //       reject(new TypeError("Failed to upload"));
  //     };
  //     xhr.responseType = "blob";
  //     xhr.open("GET", uri, true);
  //     xhr.send(null);
  //   });

  //   try {
  //     const storageRef = ref(storage, `Images/image-${Date.now()}`);
  //     const result = await uploadBytes(storageRef, blob);

  //     blob.close();
  //     return await getDownloadURL(storageRef);
  //   } catch (error) {
  //     alert(`Error: ${error}`);
  //   }
  // };

  return (
    <S.SettingContainer>
      <View style={s.containerBottom}>
        {!image ? (
          <>
            {/* this is for pick an image section */}
            <View style={s.containerTop}>
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
          <View>
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
        <TitleDescription
          title="Anderson Kauer"
          description="Front End Developer"
        />
      </View>
      <View style={s.containerBottom}>
        <ButtonGeneric name="Login" />
        <ButtonGeneric name="Senha" />
      </View>
    </S.SettingContainer>
  );
};

export const SettingsPage = () => {
  <S.SettingContainer>
    <View style={s.containerBottom}>
      <SettingPage />
      <TitleDescription
        title="Anderson Kauer"
        description="Front End Developer"
      />
    </View>

    <View style={s.containerBottom}>
      <ButtonGeneric name="Login" />
      <ButtonGeneric name="Senha" />
    </View>
  </S.SettingContainer>;
};

const s = StyleSheet.create({
  containerTop: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent",
  },

  // touch: {
  //   position: "absolute",
  //   top: 100,
  //   width: 300,
  //   height: 300,

  //   borderRadius: 200,
  //   borderWidth: 0.5,
  //   borderColor: "#ccc",
  //   backgroundColor: "#faa2a181",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
    borderWidth: 5,
  },
});
