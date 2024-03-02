import { View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={{ backgroundColor: "#EE9972" }}>
      <Text
        style={{
          fontSize: 20,
          padding: 10,
          color: "black",
          textAlign: "center",
        }}
      >
        This is a footer
      </Text>
    </View>
  );
}
