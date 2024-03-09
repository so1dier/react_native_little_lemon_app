import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

export default function LoginPage() {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loggedIn, onLogin] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {loggedIn && <Text style={styles.headerText}>You are logged in</Text>}

      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue</Text>
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
            keyboardType="default"
            secureTextEntry={true}
          ></TextInput>
        </>
      )}
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          onLogin(!loggedIn);
        }}
      >
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>
    </ScrollView>
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
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
