import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import Homepage from "./screens/Homepage";
import Draweritems from "./constants/Draweritems";

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return <Text>Home Screen</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        {Draweritems.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={
              drawer.name === "Home"
                ? Homepage
                : drawer.name === "Sun"
                ? Cart
                : Products
            }
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
