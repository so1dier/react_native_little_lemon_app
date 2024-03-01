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
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{ flex: 0.2 }}>
        <LittleLemonHeaderThreeLines />
      </View>
      <View style={{ flex: 0.8, justifyContent: "flex-start" }}>
        {/* <WelcomeScreen /> */}
        <MenuItems />
      </View>

      <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
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
