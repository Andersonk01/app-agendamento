import { Box } from "../../components/Box";

import { ModalContent } from "../../components/ModalContent";
import { ServiceComponent } from "../../components/ServiceConponent";
import { DesignerComponent } from "../../components/DesignerComponent";
import { TimeTable } from "../../components/TimeTable";

import * as S from "./styled";

import { Profile } from "../../components/Profile";
import { StyleSheet, View, Image, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";

export function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDesigner, setOpenDesigner] = useState<boolean>(false);
  const [openDataHour, setOpenDataHour] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {/* Parte Superior */}
      <S.ContainerTop>
        <Profile />
      </S.ContainerTop>

      {/* Parte Inferior */}
      <S.ContainerBottom>
        <View style={styles.box}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPressOut={() => setOpenModal(true)}
          >
            <Box name="Agendamento">
              <Image
                style={styles.image}
                source={require("../../components/Box/assets/services100.png")}
                resizeMode="contain"
              />
            </Box>
          </TouchableOpacity>
        </View>
      </S.ContainerBottom>
      {/* //*  Modal start */}
      {/* //* MODAL SERVICE */}
      <Modal
        visible={openModal}
        transparent={true}
        animationType="slide"
        style={{
          zIndex: 999,
          position: "relative",
          backgroundColor: "red",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.vazia}></View>

        <ModalContent
          onPressBack={() => setOpenModal(false)}
          onPress={() => {
            setOpenDesigner(true);
            setTimeout(() => {
              setOpenModal(false);
            }, 500);
          }}
        >
          <ServiceComponent />
        </ModalContent>
      </Modal>

      {/* //* MODAL DESIGNER */}
      <Modal
        visible={openDesigner}
        transparent={true}
        animationType="slide"
        style={{
          zIndex: 999,
          position: "relative",
          backgroundColor: "red",
          justifyContent: "flex-end",
        }}
      >
        {/* part de cima do modal - transparent */}
        <View style={styles.vazia}></View>

        <ModalContent
          onPressBack={() => setOpenDesigner(false)}
          onPress={() => {
            setOpenDataHour(true);
            setTimeout(() => {
              setOpenDesigner(false);
            }, 500);
          }}
        >
          <DesignerComponent />
        </ModalContent>
      </Modal>

      {/* //* MODAL DATA AND HOURS */}

      <Modal
        visible={openDataHour}
        transparent={true}
        animationType="slide"
        style={{
          zIndex: 999,
          position: "relative",
          backgroundColor: "red",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.vazia}></View>
        <ModalContent
          onPressBack={() => setOpenDataHour(false)}
          onPress={() => setOpenDataHour(false)}
        >
          <TimeTable />
        </ModalContent>
      </Modal>

      {/* //* Modal end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    position: "absolute",
    bottom: 100,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 50,
  },
  imgs: {
    flex: 1,
    width: "100%",
  },
  vazia: {
    flex: 1,
  },
});
