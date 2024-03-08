import React, { useState } from "react";
import { SectionList, Text, View } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All rights reserved by Little Lemon 2022
  </Text>
);

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems = () => {
  const [showMenu, setShowMenu] = useState(false);
  const rederItem = ({ item }) => <Item name={item} />;

  const rederSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );
};
