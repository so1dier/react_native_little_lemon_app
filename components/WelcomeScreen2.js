import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function WelcomeScreen2() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/littleLemonLogo2.png")}
          resizeMode="contain"
        />
        <Text style={styles.titleText}>Little Lemon</Text>
      </View>
      <Text style={styles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic coctails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
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
