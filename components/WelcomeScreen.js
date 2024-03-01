import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "darkgreen" }}>
      <Text
        style={{
          fontSize: 30,
          padding: 40,
          color: "white",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 20,
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
    </View>
  );
}
