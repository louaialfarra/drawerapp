import { View, Text, StyleSheet } from "react-native";

export default function Homepage() {
  return (
    <View style={style.container}>
      <Text style={style.title}>this is Home page </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});
