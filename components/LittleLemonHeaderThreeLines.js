import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeaderThreeLines() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText} numberOfLines={3}>
        Welcome <Text style={headerStyles.headerHighlight}>Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: { backgroundColor: "#F4CE14" },
  headerText: { padding: 40, fontSize: 30, color: "black" },
  headerHighlight: { fontWeight: "bold" },
});
