import React, { useState } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";

export default function WelcomeScreen() {
  const [name, onChangeTextName] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.scrollViewContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollViewContainer}
        indicatorStyle="white"
        keyboardDismissMode="on-drag"
      >
        <Image
          style={styles.logo}
          source={require("../assets/littleLemonLogo.png")}
        />
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.bodyText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          input={name}
          onChangeText={onChangeTextName}
          placeholder={"First name"}
        ></TextInput>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
});
