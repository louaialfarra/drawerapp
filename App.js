import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import Homepage from "./screens/Homepage";
import Draweritems from "./constants/Draweritems";
import Header from "./components/Header";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Homepage"
        screenOptions={({ navigation, route }) => ({
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
          header: () => <Header navigation={navigation} title={route.name} />,
        })}
      >
        {Draweritems.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={
              drawer.name === "Home"
                ? Homepage
                : drawer.name === "Cart"
                ? Cart
                : Products
            }
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
