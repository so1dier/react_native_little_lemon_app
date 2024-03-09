import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function LoginPage() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [showLoggedIn, setShowLoggedIn] = React.useState(false);

  return (
    <View style={styles.container}>
      {!showLoggedIn && (
        <>
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
        </>
      )}
      {showLoggedIn && (
        <Text style={styles.infoSection}>You are logged in</Text>
      )}
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          setShowLoggedIn(!showLoggedIn);
        }}
      >
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>
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
  loginButton: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  loginButtonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
