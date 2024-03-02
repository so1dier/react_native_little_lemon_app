import { View, Text, ScrollView, StyleSheet } from "react-native";

const Items = [
  "Baklava\nFruit\nVegetable\nBread\nBeer\nWine\nCoffee\nTea\nSalad\nAmaretto\nCabbage\nFasol\nBread\nPepper\nSalt\nVinegar\nSvekla\nPorto\nBaklava\nFruit\nVegetable\nBread\nBeer\nWine\nCoffee\nTea\nSalad\nAmaretto\nCabbageFasol\nBread\nPepper\nSalt\nVinegar\nSvekla\nPorto",
];
const green = "#495E57";

const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        style={menuStyles.innerContainer}
        horizontal={false}
        indicatorStyle={"white"}
      >
        <Text style={menuStyles.headerText}>Menu Items</Text>
        <Text style={menuStyles.itemText}>{Items[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: { flex: 0.75 },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "black",
  },
  headerText: { fontSize: 35, color: "green", flexWrap: "wrap" },
  itemText: { fontSize: 30, color: "green" },
});
