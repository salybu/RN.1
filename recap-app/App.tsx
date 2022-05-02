import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "./colors";
import Header from "./components/headers";
import Input from "./components/input";
import { TAB_WORK } from "./constants";

export default function App() {
  const [tabSelected, setTabSelected] = React.useState<string>(TAB_WORK);
  return (
    <View style={styles.container}>
      <Header setTab={setTabSelected} tabSelected={tabSelected} />
      <Input tabSelected={tabSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
