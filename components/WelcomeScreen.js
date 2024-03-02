import { Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView style={styles.scroll_view_container} indicatorStyle="white">
      <Text
        style={{
          fontSize: 40,
          padding: 40,
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 38,
          padding: 20,
          color: "white",
          marginVertical: 8,
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll_view_container: { flex: 1 },
});
