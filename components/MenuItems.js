import { View, Text, ScrollView } from "react-native";

const Items = [
  "Baklava\nFruit\nVegetable\nBread\nBeer\nWine\nCoffee\nTea\nSalad\nAmaretto\nCabbage\nFasol\nBread\nPepper\nSalt\nVinegar\nSvekla\nPorto\nBaklava\nFruit\nVegetable\nBread\nBeer\nWine\nCoffee\nTea\nSalad\nAmaretto\nCabbageFasol\nBread\nPepper\nSalt\nVinegar\nSvekla\nPorto",
];
const green = "#495E57";

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        style={{
          backgroundColor: "black",
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}
        horizontal={false}
        indicatorStyle={"white"}
      >
        <Text style={{ fontSize: 35, color: "green", flexWrap: "wrap" }}>
          Menu Items
        </Text>
        <Text style={{ fontSize: 30, color: "green" }}>{Items[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
