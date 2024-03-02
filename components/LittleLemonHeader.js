import * as React from "react";

import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#EE9972" }}>
      <Text
        style={{
          padding: 40,
          fontSize: 20,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon Restaurant
      </Text>
    </View>
  );
}
