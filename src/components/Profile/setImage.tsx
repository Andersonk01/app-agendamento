import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";
import * as S from "../../pages/Setting/styled";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";

type ProfileProps = {
  name: string;
  description: string;
  src: string;
};

function Profile({ name = "Anderson", description = "", src }: ProfileProps) {
  return (
    <View style={s.backImage}>
      <Image source={{ uri: src }} />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const SetImageP = () => {
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
          <TouchableOpacity style={s.touch} onPress={pickImage}>
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
          </TouchableOpacity>
        </>
      ) : (
        <View style={s.touch}>
          {/* // to display the image section */}
          <View style={s.touchImage}>
            <Image source={{ uri: image }} style={s.touchuri}></Image>
          </View>
          <Profile name="Anderson Kauer" description="Front" src={image} />
        </View>
      )}
    </S.SettingContainer>
  );
};

const s = StyleSheet.create({
  touch: {
    // position: "absolute",
    // bottom: 400,
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
  backImage: {
    position: "absolute",
    bottom: -300,
    backgroundColor: "#faa2a181",
    width: 300,
    height: 300,

    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});
