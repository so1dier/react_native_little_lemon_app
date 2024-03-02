import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is a footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#EE9972" },
  textStyle: {
    fontSize: 20,
    padding: 10,
    color: "black",
    textAlign: "center",
  },
});
