import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import {
  useDeviceOrientation,
  useAppState,
  // useClipboard,
} from "@react-native-community/hooks";

export default function WelcomeScreen2() {
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const orientation = useDeviceOrientation();
  const appState = useAppState();
  // const [data, setString] = useClipboard();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/littleLemonLogo2.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text
          style={[
            styles.titleText,
            colorScheme === "light"
              ? { color: "#333333" }
              : { color: "#EDEFEE" },
          ]}
        >
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.bodyText,
          colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic coctails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
      <Text style={styles.regular}>
        Window dimensions. H:{window.height} W:{window.width} Font:
        {window.fontScale}
      </Text>
      <Text style={styles.regular}>
        Orientation. Portrait: {orientation.portrait}, Landscape:{" "}
        {orientation.landscape}
      </Text>
      <Text style={styles.regular}>appState: {appState}</Text>
      {/* Does not work: */}
      {/* <Text style={styles.regular}>Clipboard text: {data}</Text>
      <Button
        style={styles.button}
        title="Update Clipboard"
        onPress={() => setString("new clipboard data")}
      >
        SetClipboard
      </Button> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerWrapper: { flexDirection: "row", justifyContent: "center", margin: 10 },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  titleText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  bodyText: {
    marginVertical: 8,
    padding: 20,
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 24,
  },
});
