import { Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.scrollViewContainer} indicatorStyle="white">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: { flex: 1 },
  headerText: {
    fontSize: 40,
    padding: 40,
    color: "white",
    textAlign: "center",
  },
  bodyText: {
    fontSize: 38,
    padding: 20,
    color: "white",
    marginVertical: 8,
    textAlign: "center",
  },
});
