import { View, Text, StyleSheet } from "react-native";

export default function Products() {
  return (
    <View style={style.container}>
      <Text style={style.title}>this is Products </Text>
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
