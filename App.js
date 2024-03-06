import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeaderThreeLines from "./components/LittleLemonHeaderThreeLines";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import FlatListMenuItems from "./components/FlatListMenuItems";
import MenuItemsFlatList from "./components/MenuItemsFlatList";
import FeedbackForm from "./components/FeedbackForm";
import LoginPage from "./components/LoginPage";

const black = "#333333";
export default function App() {
  return (
    //<View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "#333333" }}>
      {/* <StatusBar style="auto" /> */}
      {/* <LittleLemonHeaderThreeLines /> */}
      <LittleLemonHeader />
      {/* <WelcomeScreen /> */}
      {/* <MenuItems /> */}
      {/* {<FlatListMenuItems />} */}
      {/* {<MenuItemsFlatList />} */}
      {/* {<FeedbackForm />} */}
      {<LoginPage />}

      <View style={{}}>
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
