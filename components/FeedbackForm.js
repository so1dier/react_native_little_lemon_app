import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  const [feedbackMessage, onChangeFeedbackMessage] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text style={styles.infoSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighbborhood bistro that serves simple
          food and classic coctails in a lively but casual environment Would
          love to hear your expericence with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={onChangeLastName}
        />
        <TextInput
          style={styles.input}
          value={feedbackMessage}
          onChangeText={onChangeFeedbackMessage}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#495E57" },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
