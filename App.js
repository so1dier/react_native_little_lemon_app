import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeaderThreeLines from "./components/LittleLemonHeaderThreeLines";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    //<View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "#495E57" }}>
      {/* <StatusBar style="auto" /> */}
      <LittleLemonHeaderThreeLines />
      <WelcomeScreen />
      {/* <MenuItems /> */}

      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
