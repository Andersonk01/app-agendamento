import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Routes } from "./src/routes";
import { ThemeProvider } from "./src/theme/Theme";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
  },
});
