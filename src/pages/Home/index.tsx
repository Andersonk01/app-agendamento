import { StatusBar, setStatusBarTranslucent } from "expo-status-bar";
import Box from "../../components/Box";
import ModalContent from "../../components/ModalContent";
import { ServiceComponent } from "../../components/ServiceConponent";
import { DesignerComponent } from "../../components/DesignerComponent";
import { TimeTable } from "../../components/TimeTable";

import { Profile } from "../../components/Profile";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
type Homeprops = {
  children?: React.ReactNode;
};

export function Home({ children }: Homeprops) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDesigner, setOpenDesigner] = useState<boolean>(false);
  const [openDataHour, setOpenDataHour] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Parte Superior */}
      <View style={styles.containerTop}>
        <Profile />
      </View>

      {/* Parte Inferior */}
      <View style={styles.containerBottom}>
        <View style={styles.box}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPressOut={() => setOpenModal(true)}
          >
            <Box name="Serviços">
              <Image
                style={s.imagem}
                source={require("../../components/Box/assets/services100.png")}
                resizeMode="contain"
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPressOut={() => setOpenDesigner(true)}
          >
            <Box name="Designer">
              <Image
                style={s.imagem}
                source={require("../../components/Box/assets/users.png")}
                resizeMode="contain"
              />
            </Box>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPressOut={() => setOpenDataHour(true)}
          >
            <Box name="Data e Hora">
              <Image
                style={s.imagem}
                source={require("../../components/Box/assets/calendar.png")}
                resizeMode="contain"
              />
            </Box>
          </TouchableOpacity>
        </View>
      </View>

      {/* //*  Modal start */}
      {children}
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
      {/*//! focar no calendar  / consertar erros de tipagem (source and sourceId) */}
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
const s = StyleSheet.create({
  imagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: 50,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  containerTop: {
    flex: 2,
    width: "100%",
    backgroundColor: "#fbbbbb",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBottom: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgs: {
    flex: 1,
    width: "100%",
  },
  vazia: {
    flex: 1,
  },
});
