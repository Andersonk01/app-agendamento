import { Home } from "./src/pages/Home";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Routes } from "./src/routes";

// TODO: create a modal for Data and Hours
{
  /* <Home>
        <Text>anderson</Text>
      </Home> */
}

export default function App() {
  return (
    <View style={styles.container}>
      <Routes></Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
