import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function LoginPage() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="login"
        value={login}
        onChangeText={onChangeLogin}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry={true}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
