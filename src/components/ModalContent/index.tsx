import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { WrapperModal } from "./styles";

// type PropsModalContent = {
//   onPress: () => void;
//   text: string;
// };
type ModalContentProps = {
  children?: React.ReactNode;
  onPress?: () => void | undefined;
  onPressBack?: () => void | undefined;
};

function ModalContent({ children, onPress, onPressBack }: ModalContentProps) {
  return (
    <WrapperModal>
      {children}
      <TouchableOpacity onPress={onPressBack} style={style.buttonVoltar}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={style.buttonProximo}>
        <Text>Proximo</Text>
      </TouchableOpacity>
    </WrapperModal>
  );
}
export default ModalContent;

const style = StyleSheet.create({
  buttonVoltar: {
    height: 50,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 30,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fbbbbb",
  },
  buttonProximo: {
    height: 50,
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 30,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fbbbbb",
  },
});
// #fbbbbb
// #faa2a4