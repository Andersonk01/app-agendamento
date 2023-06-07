import {
  Image,
  ImageSourcePropType,
  ImageProps,
  StyleSheet,
} from "react-native";
import React from "react";
import { CardContainer, CardImage } from "./styled";

export type CardFeedProps = {
  id?: number;
  src?: string | ImageSourcePropType;
};

export const CardFeed = ({ src }: CardFeedProps) => {
  // let imageSource: ImageSourcePropType | undefined;
  // if (typeof src === "string") {
  //   imageSource = { uri: src };
  // } else {
  //   imageSource = src;
  // }

  const imageSource = typeof src === "string" ? { uri: src } : src;

  return (
    <CardContainer>
      {/* <Image source={imageSource} /> */}
      {imageSource && <CardImage source={imageSource} />}
    </CardContainer>
  );
};
// resizeMode="contain"

