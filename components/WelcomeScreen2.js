import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function WelcomeScreen2() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/littleLemonLogo2.png")}
        resizeMode="contain"
      >
        <Text style={styles.titleText}>Little Lemon</Text>
      </ImageBackground>
      <Text style={styles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic coctails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, marginTop: 25, backgroundColor: "#fff" },
  image: {
    flex: 1,
    height: 100,
    width: 350,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignContent: "",
  },
  titleText: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 16,
  },
});
