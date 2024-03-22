import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

//Stack navigation
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Tab navigation
// import {
//   NavigationContainer,
//   getFocusedRouteNameFromRoute,
// } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Drawer navigation
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//import { Ionicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeaderThreeLines from "./components/LittleLemonHeaderThreeLines";
import WelcomeScreen from "./components/WelcomeScreen";
import WelcomeScreen2 from "./components/WelcomeScreen2";
import MenuItems from "./components/MenuItems";
import FlatListMenuItems from "./components/FlatListMenuItems";
import MenuItemsFlatList from "./components/MenuItemsFlatList";
import FeedbackForm from "./components/FeedbackForm";
import LoginPage from "./components/LoginPage";
import MenuItemsSectionList from "./components/MenuItemsSectionList";

const black = "#333333";

// const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//3. Drawer Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Welcome" component={WelcomeScreen2} />
        <Drawer.Screen name="Menu" component={MenuItemsSectionList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//2. Bottom Tab Navigation
//export default function App() {
//  return (
//    <>
//      <NavigationContainer>
//        <Tab.Navigator
//          screenOptions={({ route }) => ({
//            tabBarIcon: ({ focused, color, size }) => {
//              let iconName;
//
//              if (route.name === "Welcome") {
//                iconName = focused ? "beer" : "beer-outline";
//              } else if (route.name === "Menu") {
//                iconName = focused ? "airplane" : "airplane-outline";
//              }
//              return <Ionicons name={iconName} size={size} color={color} />;
//            },
//            tabBarActiveTintColor: "tomato",
//            tabBarInactiveTintColor: "gray",
//          })}
//        >
//          <Tab.Screen name="Menu" component={MenuItemsSectionList} />
//          <Tab.Screen name="Welcome" component={WelcomeScreen2} />
//        </Tab.Navigator>
//      </NavigationContainer>
//    </>
//  );
//}

//1. Stack navigation
//function LogoTitle() {
//  return (
//    <Image
//      source={require("./assets/littleLemonLogo2.png")}
//      style={{
//        height: 40,
//        width: 300,
//        resizeMode: "contain",
//        alignSelf: "center",
//      }}
//    />
//  );
//}
//
//export default function App() {
//  return (
//    <>
//      <NavigationContainer>
//        <View style={styles.container}>
//          <LittleLemonHeader />
//          <Stack.Navigator
//            initialRouteName="Login"
//            screenOptions={{
//              headerStyle: { backgroundColor: "#333333" },
//              headerTintColor: "#fff",
//              headerTitleStyle: {
//                fontWeight: "bold",
//              },
//            }}
//          >
//            <Stack.Screen name="Login" component={LoginPage} />
//            <Stack.Screen
//              name="Welcome"
//              component={WelcomeScreen}
//              options={{
//                title: "Home",
//                headerTitle: (props) => <LogoTitle {...props} />,
//              }}
//            />
//            <Stack.Screen name="Menu" component={MenuItemsSectionList} />
//            {/* {
//          //<View style={styles.container}>
//          <View style={{ flex: 1, backgroundColor: "#333333" }}>
//            {/* <StatusBar style="auto" /> */}
//            {/* <LittleLemonHeaderThreeLines /> */}
//            {/* {<LittleLemonHeader />} */}
//            {/* <WelcomeScreen /> */}
//            {/* {<WelcomeScreen2 />} */}
//            {/* <MenuItems /> */}
//            {/* {<FlatListMenuItems />} */}
//            {/* {<MenuItemsFlatList />} */}
//            {/* {<FeedbackForm />} */}
//            {/* {<LoginPage />} */}
//            {/* {<MenuItemsSectionList />} */}
//
//            {/* <View style={{}}>
//              <LittleLemonFooter />
//            </View>
//          </View> */}
//          </Stack.Navigator>
//        </View>
//        <View style={styles.footerContainer}>
//          <LittleLemonFooter />
//        </View>
//      </NavigationContainer>
//    </>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: "#333333",
//    // alignItems: "center",
//    // justifyContent: "center",
//  },
//  footerContainer: {
//    backgroundColor: "#333333",
//  },
//});
//
